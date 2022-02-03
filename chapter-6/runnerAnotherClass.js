class Runner {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    printEnrolment(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

let memberRunning = new Runner("Raquel", 34, "F");
memberRunning.printEnrolment();
console.log(`Name: ${memberRunning.name}`);