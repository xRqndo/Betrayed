const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')
const r = require('node-superfetch')
    
module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            description: 'Get A Picture Of A Cat',
            category: 'Fun',
        })
    }
        
    async run(message, args) {    
        let embed = new MessageEmbed()
        .setImage(`https://cataas.com/cat?${Math.floor(Math.random() * 1000) + 1}`)
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}