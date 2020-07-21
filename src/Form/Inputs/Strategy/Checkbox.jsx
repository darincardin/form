import React from 'react';



var Checkbox =   {
	
	getEvent: e =>[e.target.name, e.target.checked],

	validate: (required, value) =>{
		return ''
	},

	html: attribs =>{
			
		//delete attribs.value;

		return <>
			
			<input {...attribs}  className="form-group" type="checkbox" checked={attribs.value}  autoComplete="off" /> 		
		
		</>
	}
}

	
export default Checkbox;

