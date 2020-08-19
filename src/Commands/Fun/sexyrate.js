const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Sexy Rate Yourself, Or Someone Else',
            category: 'Fun',
            usage: '[member]'
        })
    }
    
    async run(message, args) {

        const percent = Math.floor(Math.random() * 100)

        const user = message.mentions.users.first()

        if(!user) {
            const embed2 = new MessageEmbed()
            .setTitle(`Sexy Pecentage Discover:`)
            .setDescription(`**User:** ${message.author.username}\n**Percentage:** ${percent}`)
            .setColor('0xf513da')
            .setTimestamp()
            return message.channel.send(embed2)
        }

        const embed = new MessageEmbed()
        .setTitle(`Sexy Pecentage Discover:`)
        .setDescription(`**User:** ${user.username}\n**Percentage:** ${percent}`)
        .setColor('0xf513da')
        .setTimestamp()
        return message.channel.send(embed)
    }
}