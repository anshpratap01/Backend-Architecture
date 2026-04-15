const EventEmitter = require('events');

// Step 1 - create your own class extending EventEmitter
class BankAccount extends EventEmitter {

  constructor(name, balance) {
    super();  // must call super() when extending
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    // Step 2 - emit your custom event
    this.emit('deposit', amount, this.balance);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      this.emit('error', 'Insufficient balance!');
    } else {
      this.balance -= amount;
      this.emit('withdraw', amount, this.balance);
    }
  }

}

// Step 3 - create object
const account = new BankAccount('Ansh', 1000);

// Step 4 - listen to your custom events
account.on('deposit', function(amount, balance) {
  console.log(`✅ Deposited: ${amount} | New Balance: ${balance}`);
});

account.on('withdraw', function(amount, balance) {
  console.log(`✅ Withdrawn: ${amount} | New Balance: ${balance}`);
});

account.on('error', function(msg) {
  console.log(`❌ Error: ${msg}`);
});

// Step 5 - trigger events
account.deposit(500);     // ✅ Deposited: 500 | New Balance: 1500
account.withdraw(200);    // ✅ Withdrawn: 200 | New Balance: 1300
account.withdraw(5000);   // ❌ Error: Insufficient balance!