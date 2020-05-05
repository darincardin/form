import React from 'react';
import ReactDOM from 'react-dom';

import Form from "./Form/Form.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class Main extends React.Component {
	
	state = {object: {} }	
	
	inputs = [ 
		{label:"First Name", name:"fName", tag:"Text"},
		{label:"Last Name",  name:"lName", tag:"Text"},
		{label:"Phone",      name:"phone", tag:"Phone"},
	]	

	onSuccess = (result)=>{
		console.log(result);
	}
	
	render = ()=>{
		return (
			<div>
				<Form  onSuccess={this.onSuccess} object={this.state.order}   inputs={this.inputs}>
					<hr/>
					<button type="submit" className="btn btn-primary">Submit</button> 
				</Form>
			</div>
		)
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

