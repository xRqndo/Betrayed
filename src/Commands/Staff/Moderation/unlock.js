const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Unlocks All Channels',
            category: 'Moderation',
        })
    }
    
    async run(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('You are missing the permission Adminstrator')
        }

        const control = args[0]
        //const channels = message.guild.channels.cache.filter(ch => ch.type === 'category')

        if(!control) {
                //channels.forEach(channel => {
                message.channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })//.then(() => {
                    //  channel.setName(channel.name += '🔒')
                //})
            //})
            return message.channel.send('Unlocked All Channels!')
        }
    }
}
