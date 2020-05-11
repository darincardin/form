import React from 'react';

import Text from './Inputs/Text.jsx';
import Number from './Inputs/Number.jsx';
import Phone from './Inputs/Phone.jsx';

import './style.scss';

class Form extends React.Component {

	state =  { 
	    object:  {...this.props.object},
		submitted: false,
		errors:{}	
	}
	
	constructor(props) {
		super(props)
		this.props.inputs.map( i =>{	
			if(i.required && !this.state.object[i.name]) this.state.errors[i.name] = 'required'
		})	
	}
	
	isValid = ()=> {
		return Object.keys(this.state.errors).every( v => (
			!this.state.errors[v]
		))
	}
	
	componentWillReceiveProps(props) {
		
		
		//this.setState({object:props.object, submitted:false});
	}

	onSubmit = (e)=> {
	
		e.preventDefault()
		this.setState({submitted:true});
			
		if(this.isValid()){
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
			case "number": return <Number  {...attrs} />
			default:       return <Text  {...attrs} />
		}					
	}	
	
	render() {
		var Input = this.Input;
		
		return (
			<form onSubmit={this.onSubmit}>
				<table>
					{this.state.object &&
						<tbody>
						{	
							this.props.inputs.map( i =>(
								<tr key={i.name}>
									<td><label className={'control-label ' + (i.required ? 'required':'')}>{i.label}</label></td>
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
