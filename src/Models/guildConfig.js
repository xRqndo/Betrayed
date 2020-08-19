const { Structures } = require('discord.js');
const { Schema, model} = require('mongoose');

const Guild = Schema({
    _id: Schema.Types.ObjectId,
    guildID: {
        type: String,
        required: true,
        unique: true
    },
    guildName: String,
  /*  prefix: {
        default: '.',
        type: String,
        required: true
    }, */
    defaultRole: {
        type: String,
        required: false
    },
    memberLogChannel: {
        type: String,
        required: false
    },
})
module.exports = model('Guild', Guild)