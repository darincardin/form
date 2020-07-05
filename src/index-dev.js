import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



const newOrder = { id:"1", fName:"", lName:"", address:'', phone:"", amount:"", deliver: false, time:''}

const fields1 = [
	{label:"ID", 		 name:"id",    tag:"label"},
	{label:"First Name", name:"fName", tag:"text",  required:true},
	{label:"Last Name",  name:"lName", tag:"text",  required:true},
	{label:"Phone",      name:"phone", tag:"phone", required:true}
]



const fields3 =  [ 

		{label:"Order Info",  tag:"header"  },
		{label:"Amount",     name:"amount", tag:"number"},
		{label:"Deliver",    name:"deliver", tag:"checkbox"},
		{label:"Address",    name:"address", tag:"text", showIf: {name: "deliver", value:true}, required:true,},
		{label:"Time",       name:"time",    tag:"text", showIf: {name: "deliver", value:true}},
	]	
	
	
class Main extends React.Component {
	
    state = {
		object1: {...newOrder}, fields1:[...fields1], 
		object3: {...newOrder}, fields3:[...fields3] 		
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
							<h4>Test 3</h4>
							<Form object={this.state.object3} onSuccess={this.onSuccess}   fields={this.state.fields3}>
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