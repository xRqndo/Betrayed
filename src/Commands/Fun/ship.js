const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Ship Someone With Yourself, Or Someone Else',
            category: 'Fun',
            usage: '<member> [member]'
        })
    }
    
    async run(message, args) {

        const percent = Math.floor(Math.random() * 100)

        const person = args[0]
        const person2 = args[1]

        const user = message.mentions.users.first() 
        const user2 = message.mentions.users.last() 

        if(!user) {
            try {
                const embed3 = new MessageEmbed()
                .addField(`💖 Match Making 💖`, [
                    `➡ ${message.author.username}`,
                    `↪ ${person}`,
                    `**Ship Rate** ${percent}`
                ]) 
                    return message.channel.send(embed3)
                 } catch(err) {
                console.log(err)
            }
        } 
        if(user2) {
            try {
                const embed2 = new MessageEmbed()
                .addField(`💖 Match Making 💖`, [
                    `➡ ${message.author.username}`,
                    `↪ ${user.username}`,
                    `**Ship Rate** ${percent}` 
                ])
                .setTimestamp()
                .setColor('0xf513da')
                return message.channel.send(embed2)
            } catch(err) {
                console.log(err)
            }
        } 

        const embed = new MessageEmbed()
        .addField(`💖 Match Making 💖`, [
            `➡ ${user || user.username}`,
            `↪ ${user2 || message.author.name}`,
            `**Ship Rate** ${percent}`
        ])
        .setColor('0xf513da')
        .setTimestamp()
        message.channel.send(embed)
    }
}