import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as TestUtils from 'react-dom/test-utils.js';
const Form = require('../src/Form/Form.jsx').default;


Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');




var wrapper;
var btn;  
var input;
var data;

const newOrder = { id:"", fName:"", lName:"", phone:"",  amount:""}

console.warn = ()=>{}

const	inputs = [ 
	{label:"ID", 		 name:"id",     tag:"label"},
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Last Name",  name:"lName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone"},
	{label:"Amount",     name:"amount", tag:"number"}
]	

var result = {};

var	onSuccess = (data, callback)=>{
	console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
	result = data;
	
	//alert(Object.values(data).join('\n'));
//	setTimeout(() => callback(), 500);
}

		
var value = v => {	return { currentTarget: {value: v} }}


beforeEach(() => {
	
	wrapper = (mount(
		<Form object={newOrder} onSuccess={onSuccess}   inputs={inputs}>
			<button className="btn btn-primary" type="submit" >Submit</button> 
		</Form>
	));
});  
 

describe('Form', () => {
	
    test('init', () => {
		expect(wrapper.find('input').at(0).instance().value).toBe("");
		expect(wrapper.find('input').at(1).instance().value).toBe("");
		expect(wrapper.find('input').at(2).instance().value).toBe("");
		expect(wrapper.find('input').at(3).instance().value).toBe("");			
    });
	
	
	
	
    test('init2', () => {
		const data = { id:"1", fName:"Darin", lName:"Cardin", phone:"123-777-9087",  amount:"8"}
		wrapper.setProps({object:data});
			
		expect(wrapper.find('input').at(0).instance().value).toBe("Darin");
		expect(wrapper.find('input').at(1).instance().value).toBe("Cardin");
		expect(wrapper.find('input').at(2).instance().value).toBe("123-777-9087");
		expect(wrapper.find('input').at(3).instance().value).toBe("8");		



		
    });
		
	
    test('validation', () => {


		wrapper.find('button').at(0).simulate('submit');




		var inputs = wrapper.find('.form-group');
	    expect(inputs.at(0).hasClass('has-error')).toBe(true);
		expect(inputs.at(1).hasClass('has-error')).toBe(true);
		expect(inputs.at(2).hasClass('has-error')).toBe(false);
		expect(inputs.at(3).hasClass('has-error')).toBe(false);
		





		wrapper.setProps({object:{ id:"1", fName:"Darin", lName:"Cardin", phone:"123-777-9087",  amount:"8"}});
			
		var inputs = wrapper.find('.form-group');
	    expect(inputs.at(0).hasClass('has-error')).toBe(false);
	//	expect(inputs.at(1).hasClass('has-error')).toBe(false);
	//	expect(inputs.at(2).hasClass('has-error')).toBe(false);
	//	expect(inputs.at(3).hasClass('has-error')).toBe(false);
		
		
		
		
    });
});




