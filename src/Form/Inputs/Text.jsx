import React from 'react';
import tooltip from './Tooltip.jsx';

import Validation from './Validation.js';

const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx"};

class Text extends React.Component {


	constructor(props){
		super(props)
		this.elem = React.createRef();
		this.state = {value:this.props.value}
	}
	
	componentDidMount() {
	    this.ttip = tooltip(this.elem.current);
	}
	
	componentWillReceiveProps(props) {
		this.setState({value: props.value }) 
	}	
	
	onChange = e =>{	
	
		var {name, value} = e.target;
		this.setState({value:value})
			
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
	
		if(this.props.required) {
			result = Validation.required(value) ? 'required' : '';	
		}

		return result;
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
			onFocus:this.onWatch,
			onKeyUp:this.onWatch,
			onChange: this.onChange,
		}

		if(attribs.type == 'number') attribs.min = this.props.min;

		return (
			<div ref={this.elem} className={className.join(" ")} name={`my-${this.props.name}`}  >	
				<input className="form-control" {...attribs} 	value={this.state.value} /> 	
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
				<span id="inputSuccess4Status" className="sr-only">(success)</span>
			</div>
		)
	}
}			
export default Text;
