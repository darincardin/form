import React from 'react';
import Validation from '../../Tools/Validation.js';

var Select =   {

	getEvent: e =>[e.target.name, e.target.value],

	format: value =>value,
	
	validate: (required, value) =>{
		return (required && !Validation.exists(value)) ? 'required' : '';	
	},

	html: (attribs, tooltip, options) =>{

		return 	(
			<select {...attribs}  className="form-control"  >
				{options.map( i =>
					<option key={i.id} value={i.id}>{i.label}</option>
				)}
			</select>
		)
	}
}

export default Select;
