const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            category: 'Moderation',
            usage: '<user> [reason]',
            description: 'unban a given user',
        })
    }

    async run(message) {
        if(!message.member.hasPermission("BAN_MEMBERS")){
            return message.channel.send('You do not have the required permissions to run this command!')
        }
    }
}