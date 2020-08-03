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

    async run(message,args) {
        if(!message.member.hasPermission("BAN_MEMBERS")){
            return message.channel.send('You do not have the required permissions to run this command!')
        }
        const member = args[0];


        if(!member) {
            return message.channel.send('You must provide a user!')
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            message.channel.send(`${member} has been unbanned by ${message.author.tag}`)
        } catch(err) {
            return message.channel.send(`An Error has occured please report this to the Betrayed Developer Team!`)
            console.log(err)
        }
    }
}