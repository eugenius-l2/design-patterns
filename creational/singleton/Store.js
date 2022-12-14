// const Logger = require('./Logger');
//
// const logger = new Logger().getInstance();

const logger = require('./Logger');

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} in stock`);
    }
}

module.exports = Store;