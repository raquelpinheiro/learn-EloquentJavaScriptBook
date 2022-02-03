
// Before 2015
function Pet(type){
    this.type = type;
};
Pet.prototype.speak = function(message){
    console.log(`${this.type} says: ${message}`);
};
Pet.prototype.write = function(line){
    console.log(`${line}`);
};
let cat = new Pet("cat");
cat.speak("ola");
cat.write("hello");

// After 2015
class Runner {
    constructor(name){
        this.name = name;
    }
    speak(message){
        console.log(`${this.name} says: ${message}`);
    }
}
let member = new Runner("Raquel");
member.speak("Oi");
