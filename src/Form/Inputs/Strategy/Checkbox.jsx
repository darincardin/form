import React from 'react';



var Checkbox =   {
	
	getEvent: e =>[e.target.name, e.target.checked],

	format: value =>value,
	
	validate: (required, value) =>{
		return (required && !Validation.exists(value)) ? 'required' : '';	
	},

	html: attribs =>{
		return <input {...attribs}  className="form-group" type="checkbox" checked={attribs.value}  autoComplete="off" /> 		
	}
}

	
export default Checkbox;

