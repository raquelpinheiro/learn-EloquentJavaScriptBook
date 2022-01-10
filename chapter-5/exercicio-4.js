import { SCRIPTS } from './scripts.js';

function dominantDirection(text) {
  let directions = [];
  for (let index = 0; index < text.length; index++){
    let direction = characterDirection(text.charCodeAt(index));
    if (direction != null) {
       directions.push(direction);   
    }
  }  
  let directionRtl = directions.reduce((acumulador, item) => acumulador + (item == "rtl" ? 1 : 0), 0);
  let directionLtl = directions.reduce((acumulador, item) => acumulador + (item == "ltr" ? 1 : 0), 0);

  if (directionRtl > directionLtl){
    console.log("rtl");
  }else{
    console.log("ltr");
  }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

function characterDirection(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script.direction;
      }
    }
    return null;
}
  