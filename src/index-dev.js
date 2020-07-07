import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const newOrder = { id:"1", fName:"", lName:"", address:'', phone:"", quantity:"", deliver: false, time:'1'}

const fields1 = [
	{label:"ID", 		 name:"id",    tag:"label"},
	{label:"First Name", name:"fName", tag:"text",  required:true},
	{label:"Last Name",  name:"lName", tag:"text",  required:true},
	{label:"Phone",      name:"phone", tag:"phone"},
	{label:"Deliver",    name:"deliver", tag:"checkbox"},

]



const fields2 =  [ 

		{label:"Order Info",  tag:"header"  },
		/*
		{label:"Quantity",   name:"quantity",  tag:"number", required:true},
		{label:"Deliver",    name:"deliver", tag:"checkbox", showIf: {name: "quantity", func:v =>v>5 }},
		{label:"Address",    name:"address", tag:"text", required:true, showIf: {name: "deliver", value:true} },
		{label:"Time",       name:"time",    tag:"select", showIf: {name: "deliver", value:true}, options: [  
			{id:"1", label:"10:30 AM"},
			{id:"2", label:"11:00 AM"},
			{id:"3", label:"11:30 AM"}
		]}
		*/
	]	
	
	
class Main extends React.Component {
	
    state = {
		object1: {...newOrder}, fields1:[...fields1], 
		object2: {...newOrder}, fields2:[...fields2] 		
	}	

	onSuccess = (data, callback)=>{
		
		var a = "";
		Object.keys(data).forEach((v,i) =>{
			if(data[v] != undefined) a += `${v}: ${data[v]}\n`;
		});
		
		alert(a)
	}
	

	clear1 = () =>{
		this.setState( {object1: {...newOrder} } )
	}
	
	clear2 = () =>{
		this.setState( {object2: {...newOrder} } )
	}
	
	render = ()=>{
		return (
			<div className="container">
				
				<div className="row">

					<div className="col-xs-12 col-md-6">
						<div style={{background: 'white', borderRadius:'5px', padding: '10px', margin:'10px'}}>
							<h4>Test 1</h4>
							<Form object={this.state.object1} onSuccess={this.onSuccess}   fields={this.state.fields1}>
								<button className="btn btn-primary" type="submit" >Submit</button> 
								&nbsp;
								<button className="btn btn-default" type="button" onClick={this.clear1}>Clear</button>
							</Form>
						</div>
					</div>
					
					<div className="col-xs-12 col-md-6">				
						<div style={{background: 'white', borderRadius:'5px', padding: '10px', margin:'10px'}}>
							<h4>Test 2</h4>
							<Form object={this.state.object2} onSuccess={this.onSuccess}   fields={this.state.fields2}>
								<button className="btn btn-primary" type="submit" >Submit</button> 
							</Form>
						</div>				
					</div>		
				</div>
			</div>
			
	
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));


/*



					
*/