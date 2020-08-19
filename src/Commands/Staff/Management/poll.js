const Command = require('../../../Structures/Command')
const { MessageEmbed, Message } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Create A Poll.',
            usage: '<message>',
            category: 'Owner',
        })
    }
    
    async run(message, args) {
        if(!message.member.hasPermission('ADMINSTATOR')) {
            return message.channel.send(`You are not a owner`)
        }

        const messageArray = message.content.split(' ')
        const cmd = messageArray[0]

        const pollChannel = message.mentions.channels.first()
        const pollDescription = args.slice(1).join(' ')

        if(!pollChannel) {
            return message.channel.send(`Please mention a channel to send the poll to.`)
        }

        if(!pollDescription) {
            return message.channel.send(`Please provide a description for the poll.`)
        }

        const embed = new MessageEmbed()
        .setTitle(`New Poll!`)
        .setDescription(pollDescription)
        .setColor(`0x46f9c3`)
        pollChannel.send(embed).then(m => {
            m.react(`👍`)
            m.react(`👎`)
        })
    }
}