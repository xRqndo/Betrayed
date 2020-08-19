const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            description: 'Get The Invite For The Bot'
        })
    }
     
    async run(message){ 
        const embed = new MessageEmbed()
        .setTitle('Bot Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=733486879365791764&permissions=8&scope=bot')
        .setColor('#8af0f2')
        message.channel.send(embed)
    }
}