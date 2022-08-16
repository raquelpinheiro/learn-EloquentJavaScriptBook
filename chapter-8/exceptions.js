
function promptDirection(response) {
    if (response.toLocaleLowerCase() == "left") return "L";
    if (response.toLocaleLowerCase() == "rigth") return "R";
    throw new Error("Invalid direction " + response);
}

try{
    let response = promptDirection("R");
    console.log(response);
}catch(error){
    console.log("Shomething bad happened" + error);
}