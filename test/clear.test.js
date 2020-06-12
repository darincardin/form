import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;


Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');


var wrapper;


const newOrder = { fName:"",  amount:""}

console.warn = ()=>{}

const	inputs = [ 

	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Amount",     name:"amount", tag:"number"}
]	

var result = {};

var	onSuccess = (data, callback)=>{	result = data;}

		
var getEvent = (n,v)=> { return { target: {name:n, value:v} }}

var clear = () =>{
	wrapper.setProps({object: {...newOrder}});
}


beforeEach(() => {
	
	wrapper = (mount(
		<Form object={{ fName:"Darin",  amount:"8"}} onSuccess={onSuccess}   inputs={inputs}>
			<button id="submit" className="btn btn-primary" type="submit" >Submit</button> 
			<button id="clear" className="btn btn-default" type="button" onClick={clear}>Clear</button>			
		</Form>
	));
});  
 

describe('clear', () => {
	
	test('clear:1', () => {
		
		wrapper.find('#submit').simulate('submit');
		expect(wrapper.state().submitted).toBeTruthy();
		
		expect(wrapper.find('input').at(0).instance().value).toBe("Darin");
		expect(wrapper.find('input').at(1).instance().value).toBe("8");	

		expect(wrapper.find('.has-success').length).toBe(2);	
		expect(wrapper.find('.has-error').length).toBe(0);


		wrapper.find('#clear').simulate('click');

		expect(wrapper.state().submitted).toBeFalsy();
		expect(wrapper.find('input').at(0).instance().value).toBe("");
		expect(wrapper.find('input').at(1).instance().value).toBe("");	
		
		
		expect(wrapper.find('.has-success').length).toBe(0);	
		expect(wrapper.find('.has-error').length).toBe(0);

    });
	
});




