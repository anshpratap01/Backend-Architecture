function divide(num1, num2) {
  return new Promise(function(resolve, reject) {

    if (num2 === 0) {
      reject('Error: Cannot divide by zero!');
    } else {
      resolve(num1 / num2);
    }

  });
}

async function main() {
    try{
        const result = await divide(10,2);
        console.log(result);
    }catch(err){
        console.log(err);

    }
    
    
}
main();
