import React from 'react';
import tooltip from './Tooltip.jsx';

const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx"};

class Text extends React.Component {

	constructor(props){
		super(props)
		this.elem = React.createRef();
	}
	
	componentDidMount() {
	    this.ttip = tooltip(this.elem.current);
	}
	
	onChange = e =>{
		var {name, value} = e.target;

		this.props.change({
			object: { [name]: value},
			errors: { [name]: this.validate(value)}
		})
	}
	
	validate(value){  
		var result;
		
		if(this.props.validation) {
			result = this.props.validation(value);
			if(result) return result;
		}
	
		return (this.props.required && !value ) ? 'required' : '' ;
	}

	onWatch = () =>{
		var error = this.props.error;
			
		if(this.props.submitted) error ? this.ttip.show(messages[error]) : this.ttip.hide();
	}

	render(){ 
	
		var className = ["form-group has-feedback"];
			
		if(this.props.submitted) className.push( !this.props.error ? "has-success" :"has-error" );
	
		var attribs = {
			type: this.props.type || "text",
			name: this.props.name,
			defaultValue:  this.props.value,
			onFocus:this.onWatch,
			onKeyUp:this.onWatch,
			onChange: this.onChange,
		}

		if(attribs.type == 'number') attribs.min = this.props.min;

		return (
			<div ref={this.elem} className={className.join(" ")} name={`my-${this.props.name}`} >
				<input className="form-control" {...attribs} />
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
				<span id="inputSuccess4Status" className="sr-only">(success)</span>
			</div>
		)
	}
}			
export default Text;
