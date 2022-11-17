const scout_prototype = require('./scout_prototype');

const alex = scout_prototype.clone();
alex.addItemToList('slingshot');
alex.name = 'Alex';

const eve = scout_prototype.clone();
eve.addItemToList('reading light');
eve.name = 'Eve';

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);