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
	
const inputs = [ 
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Last Name",  name:"lName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone"},
	{label:"Amount",     name:"amount", tag:"number"}
]	
		
var	onSuccess = data=>{	result = data; }	
	
 
 

describe('Form', () => {
	
    test('success', () => {
		
		let wrapper = (mount(
			<Form object={newOrder} onSuccess={data=>{	result = data }}   inputs={inputs}>
				<button className="btn btn-primary" type="submit" >Submit</button> 
			</Form>
		));
		
		wrapper.find('button').at(0).simulate('submit');
	    expect(result.fName).toBeUndefined();
		expect(wrapper.state().submitted).toBeTruthy();
		
		wrapper.find('input').at(0).simulate('change', getEvent('fName','Darin') );
		wrapper.find('input').at(1).simulate('change', getEvent('lName','') );
		wrapper.find('input').at(2).simulate('change', getEvent('phone','111-111-2222') );
		wrapper.find('input').at(3).simulate('change', getEvent('amount','1') );
		
		
		wrapper.find('button').at(0).simulate('submit');
	    expect(result.fName).toBeUndefined();

		wrapper.find('input').at(1).simulate('change', getEvent('lName','Cardin') );

		wrapper.find('button').at(0).simulate('submit');
		
	    expect(result.fName+result.lName  ).toBe("DarinCardin");
	});
});




