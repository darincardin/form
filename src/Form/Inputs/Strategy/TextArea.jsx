import React from 'react';
import Validation from '../../Tools/Validation.js';

var TextArea =   {

	getEvent: e =>[e.target.name, e.target.value],
	
	format: value =>value,
	
	validate: (required, value) =>{
		return (required && !Validation.exists(value)) ? 'required' : '';	
	},

	html: (attribs, tooltip) =>{
		return <textarea className="form-control" {...attribs}  {...tooltip}  /> 		
	}
}
export default TextArea;
