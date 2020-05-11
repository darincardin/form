import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const newOrder = { fName:"dar", lName:"d", phone:"111-111-2222",  amount:""}


class Main extends React.Component {
	
	state = {object: {...newOrder} }	
	
	inputs = [ 
		{label:"First Name", name:"fName",  tag:"text",  required:true},
		{label:"Last Name",  name:"lName",  tag:"text",  required:true},
		{label:"Phone",      name:"phone",  tag:"phone"},
		{label:"Amount",     name:"amount", tag:"number"},
	]	

	onSuccess = (data)=>{

		var result = "";
		
		Object.keys(data).forEach( v => (
			result += `${v}:  ${data[v]}\n`
		))
		
		alert(result);
	}
	
	render = ()=>{
		return (
			<div style={{width: '500px', margin:'auto'}}>
				<Form  onSuccess={this.onSuccess} object={this.state.object}  inputs={this.inputs}>
					<button type="submit" className="btn btn-primary">Submit</button> 
				</Form>
			</div>
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

