import React from 'react';


import Text from './Inputs/Text.jsx';
import Number from './Inputs/Number.jsx';
import Phone from './Inputs/Phone.jsx';

const newOrder = {id:"", fName:"", lName:"", quantity:"", phone:"", address:""}


import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.scss';

class Form extends React.Component {

	state =  { 
	    object:  {...this.props.object} ,
		submitted: false,
		errors:{}	
	}
	
	componentWillReceiveProps(props) {
		this.setState({object:props.object, submitted:false});
	}

	onSubmit = (e)=> {
	
		e.preventDefault()
		this.setState({submitted:true});
	
		if(Object.keys(this.state.errors).length==0) 
			this.props.onSuccess(this.state.object)
	}


	change = e=>{
		var {name, value} = e.target;
		this.setState(state=>state.object[name] = value )
	}
	
	
	
	
	
	render() {
		
		
		var Input = function(attrs){

			switch(attrs.tag){
				case "Phone":  return <Phone  {...attrs} />
				case "Number": return <Number  {...attrs} />
				default:       return <Text  {...attrs} />
			}					
		}

		
		return (
			<form onSubmit={this.onSubmit}>
					
				<table>
					{this.state.object &&
						<tbody>
							{	
								this.props.inputs.map( i =>(
									<tr key={i.name}>
										<td><label className="control-label required">{i.label}</label></td>
										<td>
											<Text name={i.name} required change={this.change} state={this.state}  />
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
