import React from 'react';
import Validation from '../../Tools/Validation.js';
var pattern = /^\d{3}-\d{3}-\d{4}$/;


var Number =   {

	getEvent: e =>[e.target.name, e.target.value],

	format: value =>value,
	
	validate: (required, value) =>{
		return (required && !Validation.exists(value)) ? 'required' : '';	
	},

	html: (attribs, tooltip) =>{
		return <input className="form-control" {...attribs}  {...tooltip} type="number" min="1"	 /> 	
	}
}

export default Number;




