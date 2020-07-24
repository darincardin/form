import React from 'react';
import Validation from '../../Tools/Validation.js';

var Phone =   {

	getEvent: e =>[e.target.name, e.target.value],

	format: value =>{

		if(value.length==10) {
			return value.substr(0,3) +"-"+ value.substr(3,3) +"-"+ value.substr(6,4)
		}
		
		return value;
	},

	validate: (required, value) =>{
		if(required && Validation.required(value) )  return 'required';			
		return  Validation.phone(value) ? 'phone'  : '';
	},

	html: (attribs, tooltip) =>{
		return <input className="form-control" {...attribs}  {...tooltip} type="text" /> 	
	}
}

export default Phone;

