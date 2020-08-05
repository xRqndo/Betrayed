const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Creates A Channel',
            usage: '<name>',
            category: 'Moderation',
            aliases: ['channel-create', 'create-channel', 'createchannel']
        })
    }
    
    async run(message, args) {
        if(!message.member.hasPermission("ADMINSTATOR")) {
            return message.channel.send(`You are missing the Adminstrator permission`)
        }

        const name = args[0]
        const category = message.guild.category.cache;

        if(!name) {
            return message.channel.send('You must provide a channel name!')
        }

        message.guild.channels.create(name, {
            type: 'text',
        })
    }
}