import React from 'react';
import tooltip from '../Tools/Tooltip.jsx';
import Validation  from '../Tools/Validation.js';

const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx"};

class Input extends React.Component {

	constructor(props){
		super(props)
		this.elem = React.createRef();
		this.state = {value: this.props.value}
	}
	
	componentDidMount() {
	    this.ttip = tooltip(this.elem.current);
		this.tooltipParams = { onKeyUp:this.onWatch, onFocus: this.onWatch	}
	}
	
	componentWillReceiveProps(props) {
		this.setState({value: props.value }) 
	}	
	
	onChange = e =>{	
		
		var [name, value] = this.props.strategy.getEvent(e)
		
		this.setState({value:value})

		this.props.change({
			object: { [name]: value},
			errors: { [name]: this.props.strategy.validate(this.props.required, value) }
		})			
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
			onChange: this.onChange,
			value: this.state.value
		}	

		return (
			<div ref={this.elem} className={className.join(" ")} name={`my-${this.props.name}`}  >	
			
				{ this.props.strategy.html(attribs, this.tooltipParams, this.props.options) }
				
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
			</div>
		)
	}
}			
export default Input;

