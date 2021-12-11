
let length = 8;
let linha = '';

for (let i = 0; i < length; i++){
   for (let j = 0; j < length; j++){
     if (((i + j) % 2 ) > 0){
       linha += ' ';
     }else{
       linha += '#'; 
     }
   }
  console.log(linha);
  linha = '';
}
