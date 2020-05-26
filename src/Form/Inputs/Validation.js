


var Validation = (function()  {
	
	var pattern_phone = /^\d{3}-\d{3}-\d{4}$/;	
	
	var required = value =>{
		return (!value) ? 'required' : '' ;
	}	
	
	
	var phone = value =>{  
		return (value && !pattern_phone.test(value) ) ? 'phone' : '' ;
	}

	var validate = ( inputs, obj )=>{
		
		var errors = {};
		
		inputs.map( i =>{	

			if(i.required) errors[i.name] = required(obj[i.name]);

			if(i.tag == 'phone') errors[i.name] = phone(obj[i.name]);
		});
		
		return errors;	
	}

	var isValid = (errors)=>{
		return Object.keys(errors).every( v => (
			!errors[v]
		))		
	}

    return {
		validate: validate,
		isValid: isValid,
		required: required,
		phone:phone
    }
})();

export default Validation