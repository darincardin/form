import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

import * as _ from 'lodash'
window.$ = window.jQuery = require('jquery');
require('bootstrap');



var wrapper;


console.warn = ()=>{}

const	fields = [ 
	{label:"First Name", name:"fName",  tag:"text"},
	{label:"Phone",      name:"phone",  tag:"phone"},
]	


var result = {};



beforeEach(() => {
	
	wrapper = mount(<Form object={ {  fName:"", phone:""}} onSuccess={()=>{}}   fields={fields}>
							<button id="submit" className="btn btn-primary" type="submit" >Submit</button> 
						</Form>)

});  
 

describe('Validation', () => {
	
	
    test('not-required', () => {


		wrapper.find('#submit').simulate('submit');

		expect(wrapper.find('.has-success').length).toBe(2);
		
		
		wrapper.find('input[name="fName"]').simulate('change', { target: {name:'fName', value:"Darin"}} )
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"111-111-1111xxxx"}} )
		

		expect( wrapper.find('input[name="fName"]').instance().value).toBe('Darin');
		expect( wrapper.find('input[name="phone"]').instance().value).toBe('111-111-1111xxxx');			
		expect(wrapper.find('.has-success').length).toBe(1);	
		expect(wrapper.find('.has-error').length).toBe(1);
		
			
		wrapper.find('input[name="phone"]').simulate('change', { target: {name:'phone', value:"111-111-1111"}} )
		expect(wrapper.find('.has-success').length).toBe(2);	
		expect(wrapper.find('.has-error').length).toBe(0);			
    });	
});




