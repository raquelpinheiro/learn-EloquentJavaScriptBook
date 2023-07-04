let dog = {
    type: "small",
    speak: function(message){
        console.log(`Pet that is ${this.type} says: ${message}`)
    }
}; 
dog.speak("ola");

let shortDog = Object.create(dog);
shortDog.type = "short";
shortDog.speak("ola");

let cat = {
    name: "Garfield",
    speak(message){
        console.log(`${this.name} says: ${message}`);
    }
};
cat.speak("I'd like a lasanha");
