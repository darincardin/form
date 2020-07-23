import React from 'react';

var RadioButton =   {
	
	getEvent: e =>[e.target.name, e.target.value==="true"?true:false],

	validate: (required, value) =>{
		return ''
	},

	html: (attribs, tooltip, options) =>{
	
		return  <>
				{
					options && options.map( opt =>(
						<label key={opt.label} className="radio"  htmlFor={opt.label}>   
							 <input type="radio" id={opt.label} {...attribs} value={opt.value}  checked={attribs.value==opt.value}/>{opt.label}
						</label>
					))
				}
			    </>
	}
}
	
export default RadioButton;
