 const EventEmitter = require('events');
const emitter = new EventEmitter();

// listening with data
emitter.on('divide', function(num1, num2) {
  if (num2 === 0) {
    console.log('Cannot divide by zero!');
  } else {
    console.log('Answer: ' + num1 / num2);
  }
});

// emitting with data
emitter.emit('divide', 10, 2);   // Answer: 5
emitter.emit('divide', 10, 0);   // Cannot divide by zero!