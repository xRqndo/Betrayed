const Command = require('../../../Structures/Command')
const { MessageEmbed, Discord } = require('discord.js')
const moment = require('moment')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            category: 'Moderation',
            description: 'Kick A Given User',
            usage: '<member> [reason]' 
        })
    }

    async run(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply('You need the Kick Members permission to use this.')
        let user = message.mentions.users.first()
        let reason = args.slice(1).join(" ") || 'No Reason Provided'
        if (!user) return message.reply('You need to specify a user to kick.')
    
        if (!message.guild.member(user).kickable) return message.reply('Could not kick that user, either they have an higher role or you are just a noob.')
    
        await message.guild.member(user).kick()
        const embed = new MessageEmbed()
        .setColor('RED')
        .addField(`You Were Kicked!`,[
            `**Guild:** ${message.guild.name}`,
            `**Reason:** ${reason}`,
            `**Kicked By:** ${message.author.tag}`
        ])
        user.send(embed)
        message.channel.send(`Kicked ${user.tag} for ${reason}`)

    }
    
    }