const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            description: 'Get The Invite Link To Betrayed Discord'
        })
    }
     
    async run(message){ 
        const embed = new MessageEmbed()
        .setTitle('Invite')
        .setDescription('https://discord.gg/DVxavFe')
        .setColor('#8af0f2')
        message.channel.send(embed)
    }
}