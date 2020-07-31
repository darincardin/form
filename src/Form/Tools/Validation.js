

var Validation = (function()  {
	
	var pattern_phone = /^(\d{1}-)?\d{3}-\d{3}-\d{4}$/;	
	
	var pattern_chars = /^.*[a-z].*$/;
	
	var exists = value =>{ return (value != null && value != "") }	
	
	var containsChars = value =>{ return (value && pattern_chars.test(value) ) }
	
	var isPhone = value =>{  return (!value || pattern_phone.test(value) ) }


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
		exists: exists,
		containsChars: containsChars,
		isPhone:isPhone
    }
})();

export default Validation