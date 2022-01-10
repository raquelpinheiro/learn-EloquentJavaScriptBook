function every(array, test) {

  var result = array.some(item => !test(item));

  return !result;
}

console.log(every([1, 3, 5], n => n < 10));

console.log(every([2, 4, 16], n => n < 10));

console.log(every([], n => n < 10));
