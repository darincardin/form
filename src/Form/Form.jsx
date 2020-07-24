import React from 'react';

import InputFactory from './Inputs/InputFactory.jsx'
import Validation from './Tools/Validation.js';

import './style.scss';
import './validation.scss';

class Form extends React.Component {

	state =  { 
	    object:  this.props.object,
		submitted: false,
		errors:{},
		show: {}
	}
	
	refList = {}
	
	constructor(props) {
		super(props)		
		this.init();
	}
	
	componentDidMount() {
		this.validate();
		this.showIf();
	}
	
	validate =()=>{
		this.setState({errors: Validation.validate(this.refList)})
	}
	
	init(){
		
		this.props.fields.map( field=>{
			
				this.refList[field.name] =  React.createRef();
			
				if(field.showIf) {
					var {target, test} = field.showIf;	
					
					if(typeof test != 'function' ) field.showIf.test = (v) => v==test ;	
					if(typeof target == 'string')  field.showIf.target = [target] ;		

					if(this.state.show[field.name]===undefined)  this.state.show[field.name] = true;
				}	
				else  this.state.show[field.name] = true;	
		}) 	
	}
	
	onSubmit = (e)=> {

			e.preventDefault()
			this.setState({submitted:true});	
			
			var valid = this.props.fields.every( f =>{
				var visible = this.state.show[f.name];
				return visible ? this.state.errors[f.name] == '' : true;	
			})
						
			if(valid) {
				var data = Validation.getData(this.props.fields, this.state);	
				this.props.onSuccess(data, ()=>{ this.setState({submitted:false})	})	
			}
	}

	showIf = () =>{
		
		this.props.fields.map(field =>{
			
			var value = this.state.object[field.name]
			var show =  this.state.show[field.name]
	
			if(field.showIf) {
				let {test, target} = field.showIf;
				
				target.map(t =>{
					this.state.show[t] = show ? test(value): false;
				})				
			}
		})
	}

	change = (name, value, errors) =>{	
	
		this.state.object[name] = value; 
		
		this.showIf();	

		var object =  {...this.state.object, [name]:value }
		var errors =  {...this.state.errors, [name]:errors }	
		var submitted = this.state.submitted;

		this.setState( {object, errors, submitted} )
	}

	componentWillReceiveProps(props) {
		this.setState({object: props.object }, ()=>{
			this.validate();
			this.showIf();
			this.setState( {submitted:false} );
		}) 
	}

	renderField = i =>{
		  
		var Row =  InputFactory.create;

		return (
			<tr  key={i.name} type={i.tag} className={this.state.show[i.name]?'':'hide'}>
				<Row {...i} ref={this.refList[i.name]}  value={this.state.object[i.name]} error={this.state.errors[i.name] } submitted={this.state.submitted} change={this.change}  />
			</tr>
		)
	}	
	
	render() {

		return (
			<form onSubmit={this.onSubmit}>
				<table>
					<tbody>
						{   this.props.fields && 
							this.props.fields.map( field =>this.renderField(field) )	
						}
					</tbody>
				</table>
				<div className="text-right">{this.props.children}</div>
			</form>	
		)
	}
}
export default Form;
