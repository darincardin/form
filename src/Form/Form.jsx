import React from 'react';

import Text from './Inputs/Text.jsx';
import Number from './Inputs/Number.jsx';
import Phone from './Inputs/Phone.jsx';
import Checkbox from './Inputs/Checkbox.jsx';

import Validation from './Inputs/Validation.js';

import './style.scss';
import './validation.scss';

class Form extends React.Component {

	state =  { 
	    object:  this.props.object,
		submitted: false,
		errors:{}	
	}
	
	constructor(props) {
		super(props)		
		this.state.errors = this.getErrors()
	}
	
	getErrors(){
		return Validation.getErrors(this.props.fields, this.state.object);	
	}	
	

	onSubmit = (e)=> {
		e.preventDefault()
		this.setState({submitted:true});
		
		if(Validation.isValid(this.state.errors)){
			this.props.onSuccess(this.state.object, ()=>{
				this.setState({submitted:false});
			})	
		}
	}

	change = obj =>{	
		var object =  {...this.state.object, ...obj.object}
		var errors =  {...this.state.errors, ...obj.errors}	
		var submitted = this.state.submitted;

		this.setState( {object, errors, submitted} )
	}
	
	Input = function(attrs){
		switch(attrs.tag){
			case "phone":  return <Phone  {...attrs} />
			case "number": return <Number {...attrs} />
			case "text":   return <Text   {...attrs} />
			case "checkbox":  return <Checkbox {...attrs} />
			default:       return <div>{attrs.value}</div>
		}					
	}	

	componentWillReceiveProps(props) {
		this.setState({object: props.object }, ()=>{

			var errors = this.getErrors();
			this.setState( {errors:errors, submitted:false} );
		}) 
	}
	
	

	renderHeader = i =>{
		
		return (
			<tr  key={ i.header || '' + Math.random()}>
				<td colSpan="2">
					<div className="header"><span>{i.header}</span> </div>
				</td>
			</tr>
		)
	}

	
	renderInput = i =>{
		var Input = this.Input;
		
		return (
			<tr  key={ i.name}>
				<td><label className={'control-label ' + (i.required ? 'required':'')}>	{i.label}</label></td>
				<td>
					<Input {...i} value={this.state.object[i.name]} error={this.state.errors[i.name] } submitted={this.state.submitted} change={this.change}  />
				</td>
			</tr>
		)
	}
	
	

	renderData = fields => {
		
		return fields.map( field =>{

			if(field.tag == 'header') return this.renderHeader({header:field.label})
				
			else if(field.header)  return  [ this.renderHeader(field), this.renderData(field.inputs) ]

			else return this.renderInput(field) 
		})	
	}
	
	
	render() {

		return (
			<form onSubmit={this.onSubmit}>
				<table>
					<tbody>
						{this.props.fields && this.renderData(this.props.fields) }
					</tbody>
				</table>
				<div className="text-right">{this.props.children}</div>
			</form>	
		)
	}
}
export default Form;
