import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');

console.warn = ()=>{}


const fields = [ 
	{label:"Order Info", name:"info",   tag:"header"  },
	{label:"First Name", name:"fName",  tag:"text",   required:true},
	{label:"Phone",      name:"phone",  tag:"phone",  required:true},	
]			


describe('Validation', () => {
	


    test('required', () => {
		let wrapper = (mount(
			<Form object={{ fName:"",  phone:""}} onSuccess={ ()=>{} }   fields={fields}>
				<button id="submit" className="btn btn-primary" type="submit" >Submit</button> 
			</Form>
		));

		wrapper.find('#submit').simulate('submit');
		expect(wrapper.find('.has-error').length).toBe(2);
		
		
		wrapper.find('input[name="fName"]').simulate('change', { target: {name:'fName', value:"Darin"}} )
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"sss"}} )		
		expect( wrapper.find('input[name="fName"]').instance().value).toBe('Darin')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('sss')
		expect(wrapper.find('.has-error').length).toBe(1);

	
		
		wrapper.find('input[name="fName"]').simulate('change', { target: {name:'fName', value:"xxxx"}} )
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"111-111-1111"}} )				
		expect( wrapper.find('input[name="fName"]').instance().value).toBe('xxxx')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('111-111-1111')
		expect(wrapper.find('.has-error').length).toBe(0);



		wrapper.find('input[name="fName"]').simulate('change', { target: {name:'fName', value:""}} )
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:""}} )				
		expect( wrapper.find('input[name="fName"]').instance().value).toBe('')
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('')
		expect(wrapper.find('.has-error').length).toBe(2);
		
		expect(wrapper.find('.header').exists()).toBeTruthy()
	
    });		
});




