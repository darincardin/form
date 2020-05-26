import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const newOrder = { id:"1", fName:"", lName:"", phone:"",  amount:""}

	
const	inputs = [ 
	{label:"ID", 		 name:"id",     tag:"label"},
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Last Name",  name:"lName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone",   required:true},
	{label:"Amount",     name:"amount", tag:"number"}
]	

class Main extends React.Component {
	
    state = {object: {...newOrder}, inputs:[...inputs] }	

	onSuccess = (data)=>{

		var result = "";
		
		Object.keys(data).forEach( v => (
			result += `${v}:  ${data[v]}\n`
		))
		
		alert(result);
	}
	
	updateData = () =>{
		this.setState( {object: {...newOrder} } )
	}

	render = ()=>{
		return (
			<div style={{width: '450px', margin:'auto'}}>

				

				<Form object={this.state.object} onSuccess={this.onSuccess}   inputs={this.state.inputs}>
					<button className="btn btn-primary" type="submit" >Submit</button> 
					&nbsp;
					<button className="btn btn-default" type="text" onClick={this.updateData}>Clear</button>
				</Form>
			</div>
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));
