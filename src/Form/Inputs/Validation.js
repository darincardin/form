


var Validation = (function()  {
	
	var pattern_phone = /^\d{3}-\d{3}-\d{4}$/;	
	
	var required = value =>{
		return (!value) ? 'required' : '' ;
	}	
	
	var phone = value =>{  
		return (value && !pattern_phone.test(value) ) ? 'phone' : '' ;
	}

	var getErrors = ( fields, obj )=>{
		
		var errors = {};
		
		
		
 
		
		fields.map( f =>{	
			
	
			
			if(f.header){
				
				f.inputs.map(i => {
					errors[i.name] = getError(i, obj)} 
				)
				
			}
			else errors[f.name] = getError(f, obj);

			
			
			
		});

		return errors;	
	}

	var getError = (i, obj) =>{
		
		if(i.required) return  required(obj[i.name]);

		if(i.tag == 'phone') return  phone(obj[i.name]);		
		
	}


	var isValid = (errors)=>{
	
		return Object.keys(errors).every( v => (
			!errors[v]
		))		
	}

    return {
		getErrors: getErrors,
		isValid: isValid,
		required: required,
		phone:phone
    }
})();

export default Validation