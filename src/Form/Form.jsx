import React from 'react';

import Text from './Inputs/Text.jsx';
import Number from './Inputs/Number.jsx';
import Phone from './Inputs/Phone.jsx';


import Validation from './Inputs/Validation.js';

import './style.scss';



class Form extends React.Component {

	state =  { 
	    object:  this.props.object,
		submitted: false,
		errors:{}	
	}
	
	constructor(props) {
		super(props)		
		debugger;
		this.state.errors = Validation.validate(this.props.inputs, this.state.object);
	}
	
	init(){
		var errors = Validation.validate(this.props.inputs, this.state.object);	
		this.setState( {errors:errors} );
	}	
	

	onSubmit = (e)=> {
	
		e.preventDefault()
		this.setState({submitted:true});
			
		if(Validation.isValid(this.state.errors)){
			this.props.onSuccess(this.state.object)
		}
	}

	change = obj =>{	
		var object =  {...this.state.object , ...obj.object}
		var errors =  {...this.state.errors , ...obj.errors}	
		var submitted = this.state.submitted;

		this.setState({object, errors, submitted} )
	}
	
	Input = function(attrs){
		switch(attrs.tag){
			case "phone":  return <Phone  {...attrs} />
			case "number": return <Number {...attrs} />
			case "label": return  <div>{attrs.value}</div>
			default:       return <Text   {...attrs} />
		}					
	}	

	componentWillReceiveProps(props) {
		this.setState({object: props.object }, this.init) 
	}
	
	render() {
		var Input = this.Input;
		
		return (
			<form onSubmit={this.onSubmit}>
				<table>
					{this.props.inputs &&
						<tbody>
						{	
							this.props.inputs.map( i =>(
								<tr key={i.name}>
									<td><label className={'control-label ' + (i.required ? 'required':'')}>	{i.label}</label></td>
									<td>
										<Input {...i} value={this.state.object[i.name]} error={this.state.errors[i.name] } submitted={this.state.submitted} change={this.change}  />
									</td>
								</tr>		
							))
						}
						</tbody>
					}
				</table>
				<div className="text-right">{this.props.children}</div>
			</form>	
		)
	}
}
export default Form;
