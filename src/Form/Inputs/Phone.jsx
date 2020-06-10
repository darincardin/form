import React from 'react';
import Text from './Text.jsx';



import Validation from './Validation.js';

var pattern = /^\d{3}-\d{3}-\d{4}$/;

var Phone = props=>{
	
	var validate = value =>{  
		return Validation.phone(value)
	}
	
	return ( <Text type="text" {...props} validation={validate}  /> ) 	
}
export default Phone;

