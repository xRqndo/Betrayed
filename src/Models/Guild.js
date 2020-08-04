const { Structures } = require('discord.js');
const { Schema, model} = require('mongoose');

const Guild = Schema({
    _id: Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        default: '.',
        type: String,
    },
})
module.exports = model('Guild', Guild)