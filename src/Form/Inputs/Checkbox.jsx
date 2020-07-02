import React from 'react';
import tooltip from './Tooltip.jsx';
import Validation from './Validation.js';

const messages = {required:"Required", phone:"Format is xxx-xxx-xxxx"};

class Checkbox extends React.Component {


	constructor(props){
		super(props)
		this.state = {value:this.props.value}
	}
	
	componentWillReceiveProps(props) {
		this.setState({value: props.value }) 
	}	
	
	validate(value){  
		return '';
	}
	
	onChange = e =>{	
	
		var {name, checked} = e.target;
		this.setState({value:checked})
		
		this.props.change({
			object: { [name]: checked},
			errors: { [name]: this.validate(checked)}
		})	

	}
	
	render(){ 
	
		var className = ["form-group has-feedback"];
			
		if(this.props.submitted) className.push( !this.props.error ? "has-success" :"has-error" );
			
		var attribs = {
			type: "checkbox",
			name: this.props.name,
			onChange: this.onChange,
		}

		

		return (
			<div className={className.join(" ")} name={`my-${this.props.name}`}  >	
			    <label>

						<input {...attribs} className="form-group" checked={this.state.value}  autoComplete="off" /> 
			
					&nbsp;
			    </label>
			</div>
		)
	}
}			
export default Checkbox;


/*


				<input className="form-control" {...attribs} 	value={this.state.value} /> 	
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
				<span id="inputSuccess4Status" className="sr-only">(success)</span>

*/