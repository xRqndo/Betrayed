
require('dotenv').config()
const BetrayedClient = require('./Structures/BetrayedClient');
const config = require('../config.json');
const db = require('./Structures/database')
const mongoose = require('mongoose')
const Discord = require('discord.js');
mongoose.connect("mongodb+srv://xRqndo:TopxSlme@cluster0.hujb4.gcp.mongodb.net/guildConfig", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/*db.authenticate()
.then(() => {
    console.log('Connected To Ticket DB')
}).catch((err) => {
    console.log(err)
}) */

const client = new BetrayedClient(config);

client.start();