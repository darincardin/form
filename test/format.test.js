import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');

console.warn = ()=>{}

var wrapper;

const fields = [ 
	{label:"Order Info", name:"info",   tag:"header"  },
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone",  required:true, format: true},	
]			


describe('Format', () => {
		
	beforeEach(() => {
		wrapper = (mount(
			<Form object={{ fName: "", phone:""}} onSuccess={ ()=>{} }   fields={fields}>
				<button id="submit" className="btn btn-primary" type="submit" >Submit</button> 
			</Form>
		));
	});  
	 

    test('phone-change', () => {

		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"1112223333"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('111-222-3333')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"8887774444"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('888-777-4444')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"15556667777"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('1-555-666-7777')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"17779998888"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('1-777-999-8888')
    });		
	

    test('phone-nochange', () => {

		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"111222333a"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('111222333a')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"ggg7774444"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('ggg7774444')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"k5556667777"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('k5556667777')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"a"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('a')
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"122233344441"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('122233344441')

		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"877766655556"}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('877766655556')		
		
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:""}} )
		wrapper.find('input[name="phone"]').simulate('blur')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('')		
    });			
});




