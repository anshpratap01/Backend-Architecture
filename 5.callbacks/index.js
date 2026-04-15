
console.log("call back ");

function greet(name , callback){
    console.log(`${name}`)
    callback();
}

function done(){
    console.log("This is a callback function");
}

greet("ANSH" , done);
