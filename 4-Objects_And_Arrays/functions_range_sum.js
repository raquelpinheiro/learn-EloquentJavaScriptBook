
function range(start, end){
	
	let intervals = [];
			
	while (start <= end){
		intervals.push(start);
		start++;
	}
	
	return intervals;	
}

function sum(numbers){
	
	let total = 0;
	
	for (let i = 0; i < numbers.length; i++){
		total += numbers[i];
	}
	
	return total;
}

function range(start, end, step){
	
	let intervals = [];
	
	if (step === undefined){	
		step = 1;
	}
	
	console.log(step);
				
	if (step > 0){				
		while (start <= end){
			intervals.push(start);
			start += step;
		}
	}else{
		let interval = start;
		while (interval >= end){
			intervals.push(interval);
			interval = interval + step;
		}
	}
	
	return intervals;	
}