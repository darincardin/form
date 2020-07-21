import React from 'react';

import Input from './Input.jsx';
import Header from './Header.jsx';
import Label from './Label.jsx';
import {Text, Number, Phone, Checkbox, Select} from './Strategy';

class InputFactory  {

	static create =  React.forwardRef((attrs, ref) => {
			switch(attrs.tag){
				case "text":     return <Input  ref={ref} {...attrs} strategy={Text} />
				case "phone":    return <Input  ref={ref} {...attrs} strategy={Phone} />
				case "number":   return <Input  ref={ref} {...attrs} strategy={Number} />
				case "select":   return <Input  ref={ref} {...attrs} strategy={Select} />
				case "checkbox": return <Input  ref={ref} {...attrs} strategy={Checkbox} />
				case "header":   return <Header ref={ref} {...attrs} />
				default:         return <Label  ref={ref} {...attrs} />
			}
	});
}			
export default InputFactory;
