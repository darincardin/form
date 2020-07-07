import React from 'react';
import Validation  from '../Tools/Validation.js';

var Text =   {

	getEvent: e =>[e.target.name, e.target.value],
	
	validate: (required, value) =>{
		return (required && Validation.required(value)) ? 'required' : '';	
	},

	html: (attribs, tooltip) =>{
		return <input className="form-control" {...attribs}  {...tooltip}  /> 		
	}
}
export default Text;
