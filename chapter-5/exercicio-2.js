
function loop(value, condition, replace, body){
	
	while (condition(value)){
		body(value);
		value = replace(value);
	}
}

loop(3, n => n > 0, n => n - 1, console.log);