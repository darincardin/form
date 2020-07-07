import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');


console.warn = ()=>{}


var result = {};

	
var getEvent = (n,v)=> { return { target: {name:n, value:v} }}


const newOrder = { id:"", fName:"", lName:"", phone:"",  amount:"" }
	
const fields = [ 
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone"},
]	
		
var	onSuccess = data=>{	result = data; }	
	
 
 

describe('Form', () => {
	
    test('success', () => {
		
		let wrapper = (mount(
			<Form object={newOrder} onSuccess={data=>{ result = data }}   fields={fields}>
				<button className="btn btn-primary" type="submit" >Submit</button> 
			</Form>
		));
		
		
		
		wrapper.find('button').at(0).simulate('submit');
	    
		wrapper.find('input[name="phone"]').simulate('focus' )
		

		expect(true).toBeTruthy()
		//expect(wrapper.find('.popover-content').text()).toBeTruthy()
	});
});




