function arrayToList(itens){

	let list = null;
	
    for (let i = itens.length - 1; i >= 0; i--){

        list = {value: itens[i], rest: list };       
    }
    return list;
}

function listToArray(list){

	let itens = [];
	
	while (list != null){
		
		itens.push(list.value);
		
		list = list.rest;		
	}
	
	return itens;	
}

function prepend(element, list){
	
	list = {value: element, rest: list};
	
	return list;
}

function nth(list, indexElement){
	
	let element = {};
	let index = 0;
		
	while (list != null){
						
		if (index == indexElement){
			element.value = list.value;
			list = null;
		}else{
			list = list.rest;
		}

		index++;
	}	
	return element.value;
}