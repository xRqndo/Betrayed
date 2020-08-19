const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Sends A Embed',
            category: 'Fun',
            usage: '<description>'
        })
    }
    
    async run(message, args) {
        const text = args.join(" ")

        if(!text) {
            return message.channel.send(`You must provide the description!`)
        }
        
        const embed = new MessageEmbed()
        .setDescription(text)
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed)

    }
}