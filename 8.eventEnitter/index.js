const EventEmitter = require('events');

// Step 1 - create an emitter object
const emitter = new EventEmitter();

// Step 2 - listen for an event
emitter.on('greet', function() {
  console.log('Hello Ansh!');
});

// Step 3 - emit (fire) the event
emitter.emit('greet');

// Output:
// Hello Ansh!