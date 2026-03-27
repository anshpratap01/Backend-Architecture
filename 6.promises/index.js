 function divide(num1, num2) {
  return new Promise(function(resolve, reject) {

    if (num2 === 0) {
      reject('Error: Cannot divide by zero!');  // 
    } else {
      resolve(num1 / num2);                     // 
    }

  });
}
divide(10, 0)
  .then(function(result) {
    console.log('Answer is: ' + result);  // Answer is: 5
  })
  .catch(function(err) {
    console.log(err);
  });