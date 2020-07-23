import React from 'react';

import Input from './Input.jsx';
import Header from './Header.jsx';
import Label from './Label.jsx';
import {Text, Number, Phone, Checkbox,TextArea, RadioButton, Select} from './Strategy';

class InputFactory  {

	static create =  React.forwardRef((attrs, ref) => {
		
			if(attrs.tag == 'label')  return <Label  ref={ref} {...attrs} />
			if(attrs.tag == 'header') return <Header ref={ref} {...attrs} />
			 
			return <Input  ref={ref} {...attrs} strategy={InputFactory.getStrategy(attrs.tag)} />
	});
	
	
	static getStrategy = type =>{
		switch(type){
			case "text":     return Text;
			case "phone":    return Phone;
			case "number":   return Number;
			case "select":   return Select;
			case "checkbox": return Checkbox;
			case "textarea": return TextArea;
			case "radio": 	 return RadioButton;
		}		
	}
}			
export default InputFactory;
