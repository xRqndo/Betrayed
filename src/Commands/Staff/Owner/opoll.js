const Command = require('../../../Structures/Command')
const { MessageEmbed, Message } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Create A Poll.',
            usage: '<channel> <description>',
            category: 'Owner',
        })
    }
    
    async run(message, args) {
        if(!message.member.hasPermission('ADMINSTATOR')) {
            return message.channel.send(`You are not a owner`)
        }

        const messageArray = message.content.split(' ')
        const cmd = messageArray[0]

        const pollChannel = '743617977563349012'
        const pollDescription = args.slice(1).join(' ')

        const embed = new MessageEmbed()
        .setTitle(`New Poll!`)
        .setDescription(pollDescription)
        .setColor(`0xc449fe`)
        pollChannel.send(embed).then(m => {
            m.react(`👍`)
            m.react(`👎`)
        })
    }
}