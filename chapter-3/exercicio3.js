
function countBs(text){
	
	let countB = 0;
	
	for (let i = 0; i < text.length; i ++){
		if (text[i] === 'B'){
			countB += 1;
		}
	}	
	return countB;	
}

function countChar(text, character){
	
	let countChar = 0;
	
	for (let i = 0; i < text.length; i ++){
		if (text[i] === character){
			countChar += 1;
		}
	}
	return countChar;
}
