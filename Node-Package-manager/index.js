const lodash = require('lodash');

const capital = ['ansh', 'abhay'];

const cap = lodash.map(capital, lodash.capitalize);

console.log(cap);