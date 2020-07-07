import React from 'react';


import Input from './Inputs/Input.jsx';
import Text from './Inputs/Text.jsx';
import Number from './Inputs/Number.jsx';
import Phone from './Inputs/Phone.jsx';
import Checkbox from './Inputs/Checkbox.jsx';
import Select from './Inputs/Select.jsx';

import Validation from './Tools/Validation.js';




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
		
		if(Validation.isValid(this.props.fields, this.state.object)){
			var obj = {};
			
			this.props.fields.map( f =>{
				if(!f.header) {
					if(this.showRow(f))  obj[f.name] = this.state.object[f.name];
				}
			})
			
			this.props.onSuccess(obj, ()=>{ this.setState({submitted:false})	})	
		}
	}

	change = obj =>{	
		var object =  {...this.state.object, ...obj.object}
		var errors =  {...this.state.errors, ...obj.errors}	
		var submitted = this.state.submitted;

		this.setState( {object, errors, submitted} )
	}
	
	Element = function(attrs){
		
		switch(attrs.tag){
			case "text":     return <Input {...attrs} strategy={Text} />
			case "phone":    return <Input {...attrs} strategy={Phone} />
			case "number":   return  <Input {...attrs} strategy={Number} />
			case "select":   return <Input {...attrs} strategy={Select} />
			case "checkbox": return <Input {...attrs} strategy={Checkbox} />
			default:         return <div>{attrs.value}</div>
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
					<div className="header">
					
					
					<hr /><span>{i.header}</span><hr /> </div>
				</td>
			</tr>
		)
	}

	showRow = i =>{
		
		var show = false

		if(!i.showIf) return true;
		else {
			var value = this.state.object[i.showIf.name]
			
			if(i.showIf.value!==undefined && i.showIf.value==value) return  true;
			else if( i.showIf.func!==undefined && i.showIf.func(value) ) return true;
		}
		
		return show;
	}

	
	renderInput = i =>{
		var Element = this.Element;
		

		

		return (
				<tr  key={ i.name} >
					{ this.showRow(i) && 
					<>
						<td><label className={'control-label ' + (i.required ? 'required':'')}>{i.label}</label></td>
						<td>
							<Element {...i} value={this.state.object[i.name]} error={this.state.errors[i.name] } submitted={this.state.submitted} change={this.change}  />
						</td>
					</>
					}
				</tr>
		)
	}	

	renderData = fields => {
		
		return fields.map( field =>{

			if(field.tag == 'header') return this.renderHeader({header:field.label})

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
