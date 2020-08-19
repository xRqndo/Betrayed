const { RichEmbed } = require('discord.js')
const superagent = require("superagent");
const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')
    
module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            description: 'Kiss A Mentioned User',
            category: 'Fun',
            usage: '<member>'
        })
    }
        
    async run(message, args) {
        let user = message.mentions.users.first()
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/kiss`);
        
        
        if(!user) return message.channel.send('You forgot to mention a user.')
        
        message.channel.send(new MessageEmbed().setDescription(`${message.author.tag} kisses ${user.tag}`).setColor("RANDOM").setImage(body.url))     
        
    }
}