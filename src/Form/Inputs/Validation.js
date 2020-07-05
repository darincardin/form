


var Validation = (function()  {
	
	var pattern_phone = /^\d{3}-\d{3}-\d{4}$/;	
	
	var required = value =>{
		return (!value) ? 'required' : '' ;
	}	
	
	var phone = value =>{  
		return (value && !pattern_phone.test(value) ) ? 'phone' : '' ;
	}

	var getErrors = ( fields, obj ) => {
		
		var errors = {};
		
		fields.map( f =>{	
			
			errors[f.name] = getError(f, obj);
		});

		return errors;	
	}

	var getError = (i, obj) =>{
		
		if(i.required) return  required(obj[i.name]);

		if(i.tag == 'phone') return  phone(obj[i.name]);		
		
	}



	var isValid = ( fields, obj )=>{
		

		var errors = {};
		
		fields.map( f =>{	
			
				if(f.showIf) {
					let {name, value} = f.showIf;
					
					if( obj[name] == value) errors[f.name] = getError(f, obj);
					
					
				}
				else errors[f.name] = getError(f, obj);	
		});
		
		
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