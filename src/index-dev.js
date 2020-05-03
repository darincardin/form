import React from 'react';
import ReactDOM from 'react-dom';


import Form from "./Form/Form.jsx";
import Text from './Form/Inputs/Text.jsx';
import Number from './Form/Inputs/Number.jsx';
import Phone from './Form/Inputs/Phone.jsx';

class Main extends React.Component {
	
	state = {object: {fName:""} }
	
	
	inputs = [ 
		{label:"First Name", name:"fName", tag:"Text"},
		{label:"Last Name",  name:"lName", tag:"Text"},
		{label:"Phone",      name:"phone", tag:"Phone"},
	]
	

	onSuccess = ()=>{
		debugger;
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

/*
<hr/>
					<button type="submit" className="btn btn-primary">Submit</button> 	
*/