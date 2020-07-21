


var Validation = (function()  {
	
	var pattern_phone = /^\d{3}-\d{3}-\d{4}$/;	
	
	var required = value =>{ return (!value) }	
	
	var phone = value =>{  	return (value && !pattern_phone.test(value) ) }


	var validate = refList =>{
		
		var errors = {};

		Object.keys(refList).map(i =>{
			errors[i] = refList[i].current.validate();	
		})		
		
		return errors;
	}

	var getData = (fields, state) =>{
		
		var obj = {...state.object};
			
		fields.map( f =>{
			if(!state.show[f.name]) obj[f.name] = undefined;
		})	
		
		return obj;
	}


    return {
		validate: validate,
		getData: getData,
		required: required,
		phone:phone
    }
})();

export default Validation