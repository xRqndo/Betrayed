const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')
    
module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            description: 'Get Someones Penis Size',
            category: 'Fun',
            usage: '[member]'
        })
    }
        
    async run(message, args) {
        let user = message.mentions.users.first()
        if(!user) user = message.author
        let replies = [
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D",
            "8======D",
            "8========D",
            "8=========D",
            "8==========D",
             ]
         
             let random = Math.floor(Math.random() * replies.length)
         
             let embed = new MessageEmbed()
             .setTitle(`Penis Measuring Stick:`)
             .setDescription(`${user.tag} Penis\n${replies[random]}`)
             .setColor("RANDOM")
         
             message.channel.send(embed)
    }
}