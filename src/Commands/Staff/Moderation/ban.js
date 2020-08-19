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
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('❌ You need the Ban Members permission to use this.')
        let user = message.mentions.users.first()
        let reason = args.slice(1).join(" ") || 'No Reason Provided'
        if (!user) return message.reply('You need to specify a user to ban.')
    
        if (!message.guild.member(user).bannable) return message.reply('Could not ban that user, either they have an higher role or you are just a noob.')
    
        await message.guild.member(user).ban()
        const embed = new MessageEmbed()
        .setColor('RED')
        .addField(`You Were Banned!`,[
            `**Guild:** ${message.guild.name}`,
            `**Reason:** ${reason}`,
            `**Banned By:** ${message.author.tag}`
        ])
        user.send(embed)
        message.channel.send(`Banned ${user.tag} for ${reason}`)

    }
    
    }