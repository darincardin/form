import React from 'react';
import Text from './Text.jsx';


var pattern = /^\d{3}-\d{3}-\d{4}$/;

var Phone = props=>{
	
	var validate = (value) =>{  
		return (value && !pattern.test(value) ) ? 'phone' : '' ;
	}
	
	return ( <Text type="text" {...props} validation={validate}  /> ) 	
}
export default Phone;

