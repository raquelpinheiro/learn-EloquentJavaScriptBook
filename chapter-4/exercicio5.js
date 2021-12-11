function deepEqual(value1, value2){

	if ((value1 === null || value2 === null) || (typeof(value1) !== typeof(value2)))
		return false;	
	
	if (Object.keys(value1).length != Object.keys(value2).length)
		return false;
		
	if (typeof(value1) == "object" && typeof(value2) == "object"){
	
		for (let i = 0; i < Object.keys(value1).length; i++){
			let result = deepEqual(value1[Object.keys(value1)[i]], value2[Object.keys(value2)[i]]);
			if (!result)
				return false;
		}	
	}else{
	
		if (value1 !== value2)
			return false;
		
	}
	
	return true;
}