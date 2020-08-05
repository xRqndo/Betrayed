const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Locks Channels So Non-Admins Cant Talk (If you use .lock with no on or off it will auto lock all channels)',
            usage: '[on|off]',
            category: 'Moderation',
            aliases: ['lockdown']
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
                    SEND_MESSAGES: false
                })//.then(() => {
                    //  channel.setName(channel.name += '🔒')
                //})
            //})
            return message.channel.send('Locked All Channels!')
        }

        if (control === 'on') {
            //channels.forEach(channel => {
                message.channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })//.then(() => {
                  //  channel.setName(channel.name += '🔒')
                //})
            //})
            return message.channel.send('Locked All Channels!')
        } else {
            if (control === 'off') {
                //channels.forEach(channel => {
                    message.channel.updateOverwrite(message.guild.roles.everyone, {
                        SEND_MESSAGES: true
                    })//.then(() => {
                    //channel.setName(channel.name -= '🔒')
                    //})
                //})
            }
            return message.channel.send('Unlocked All Channels!')
        }
    }
}