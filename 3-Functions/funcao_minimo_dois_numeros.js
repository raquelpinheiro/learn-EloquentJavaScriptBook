
function min(value1, value2){
	
	if (value1 === undefined || value2 === undefined){
		return 0;		
	}
		
	if (value1 < value2){
		return value1;
	} else {
		return value2;
	}
}