  
const BetrayedClient = require('./Structures/BetrayedClient');
const config = require('../config.json');

const client = new BetrayedClient(config);
client.start();