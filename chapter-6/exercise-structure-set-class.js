class Group {
    constructor(){
        this.values = [];
    }
    add(value){
        if(!this.values.includes(value)){
            this.values.push(value);
        }
    }
    has(value){
        return this.values.includes(value);
    }
    delete(value){
        let index = this.values.indexOf(value);
        if (index >= 0){
            this.values.splice(index, 1);
        }
    }
    static from(values){
        let newGroup = new Group();
        for(let i = 0; i < values.length; i++){
            newGroup.add(values[i]);
        }
        return newGroup;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));