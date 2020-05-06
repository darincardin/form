import React from 'react';
import tooltip from './Tooltip.jsx';

const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx"};

class Text extends React.Component {

	constructor(props){
		super(props)
		this.elem = React.createRef();
	}
	
	onChange = (e)=>{
		this.props.change(e);
		this.validate(e.target.value);	
	}
	
	validate(value){  
		if(this.props.required && !value ) this.props.state.errors[this.props.name]  = 'required';
		
		else if(this.props.validation && !this.props.validation(value)){}
		else delete  this.props.state.errors[this.props.name];		
	}
	
	componentDidMount() {
		this.validate( this.props.state.object[this.props.name]);
	    this.ttip = tooltip(this.elem.current);
	}
	
	onWatch = () =>{
		var error = this.props.state.errors[this.props.name];
			
		if(this.props.state.submitted) error ? this.ttip.show(messages[error]) : this.ttip.hide();
	}

	render(){ 
		
		var className = ["form-group has-feedback"];
		if(this.props.state.submitted) className.push( !this.props.state.errors[this.props.name] ? "has-success" :"has-error" );
	
		var attribs = {
			type: this.props.type || "text",
			name: this.props.name,
			defaultValue:  this.props.state.object[this.props.name],
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
