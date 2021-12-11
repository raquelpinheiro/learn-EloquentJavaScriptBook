
function IsEven(n){
	
	if (n === undefined || n == 1 || n < 0){
		return false;
	}
		
	let result = n % 2;
	
	if (result == 0){
		return true;
	} else {
		n = n - 2;
		return isEven(n);
	}	
		
}