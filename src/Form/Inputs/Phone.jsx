import React from 'react';
import Text from './Text.jsx';


var pattern = /^\d{3}-\d{3}-\d{4}$/;

var Phone = props=>{
	
	var validate = value=>{
		
		if(pattern.test(value)) return true;
		
		props.state.errors[props.name] = "phone";
		return false;	
	}
	
	return ( <Text type="text" {...props} validation={validate} required /> ) 	
}
export default Phone;

