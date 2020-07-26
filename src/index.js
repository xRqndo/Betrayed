  
const BetrayedClient = require('./Structures/BetrayedClient');
const config = require('../config.json');
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://xRqndo:TopxSlme@cluster0.1rmdt.gcp.mongodb.net/Data", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const client = new BetrayedClient(config);
client.start();