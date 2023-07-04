
let ages = new Map();
ages.set("Raquel", 34);
ages.set("Rafael", 35);
ages.set("Nina", 14);

console.log(ages.toString());

if (ages.has("Nina")){
    console.log("Object has founded")
}

const toStringSymbol = Symbol("toStringSymbol");
Map.prototype[toStringSymbol] = function() {
    return `Map length: ${this.size}`;
};

console.log(ages[toStringSymbol]());
