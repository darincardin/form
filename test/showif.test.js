import React from 'react';
import Enzyme, { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Form = require('../src/Form/Form.jsx').default;

Enzyme.configure({ adapter: new Adapter() })

window.$ = window.jQuery = require('jquery');
require('bootstrap');

console.warn = ()=>{}

var result = {};

var getEvent1 = (n,v)=> { return { target: {name:n, value:v} }}
var getEvent2 = (n,v)=> { return { target: {name:n, checked:v} }}

const fields = [ 
	{label:"Order Info", name:"orderInfo", 	tag:"header"  },
	{label:"First Name", name:"fName",  	tag:"text"},
	{label:"Deliver",    name:"deliver", 	tag:"checkbox", showIf: {target: ["address", 'time'], test:true}},
	{label:"Address",    name:"address", 	tag:"text"},
	{label:"Time",    	 name:"time", 		tag:"text"}
]			

var wrapper;



beforeEach(() => {
		var obj = { fName:"", deliver:false, address:"", time:""}	
	
		wrapper = (mount(
			<Form object={obj} onSuccess={ (data)=>{ result = data } }   fields={fields}>
				<button id="submit" className="btn btn-primary" type="submit" >Submit</button> 
			</Form>
		));
});  

 
describe('Validation', () => {

    test('showIf-1', () => {

	

		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(true);
		
		wrapper.find('input[name="deliver"]').simulate('change', getEvent2('deliver',true));

	
		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(false);
		wrapper.find('input[name="address"]').simulate('change', getEvent1('address',"Main_Street"));
	
		
		wrapper.find('button').at(0).simulate('submit');
		
	    expect(result.deliver ).toBe(true);
		expect(result.address ).toBe("Main_Street");
    });	


    test('showIf-2', () => {
	
	
		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(true);
	
		
		wrapper.find('input[name="deliver"]').simulate('change', getEvent2('deliver',true));

	
		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(false);
		
		
		wrapper.find('input[name="address"]').simulate('change', getEvent1('address',"Main_Street"));
	    wrapper.find('input[name="deliver"]').simulate('change', getEvent2('deliver',false));
		
		wrapper.find('button').at(0).simulate('submit');
		
	    expect(result.deliver ).toBe(false);
		expect(result.address ).toBe(undefined);
	
	
    });		
	
	
	test('reset-showIf', () => {

		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(true);
		expect(wrapper.find('input[name="time"]'   ).parents('tr').hasClass('hide')).toBe(true);
		
		wrapper.find('input[name="deliver"]').simulate('change', getEvent2('deliver',true));
		wrapper.find('input[name="address"]').simulate('change', getEvent1('address',"Smith Street"));
			
		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(false);
		expect(wrapper.find('input[name="time"]'   ).parents('tr').hasClass('hide')).toBe(false);
		
		wrapper.setProps({object: { fName:"", deliver:false, address:"", time:""}})
		wrapper.update();
		
		expect(wrapper.find('input[name="address"]').parents('tr').hasClass('hide')).toBe(true);
		expect(wrapper.find('input[name="time"]'   ).parents('tr').hasClass('hide')).toBe(true);
    });			
});

	
		

