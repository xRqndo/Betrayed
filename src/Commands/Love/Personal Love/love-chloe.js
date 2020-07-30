const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            category: 'Love'
        })
    }

    async run(message) {
        if(!this.client.guildPrivate.includes(message.guild.id)) {
            return message.channel.send('You can not use this command in this server!')
        }
        const embed = new MessageEmbed()
        .addField(`**Chloe:**`, [
            `Dating Oblivion`
        ])
        .setColor('#fe7def')
        message.channel.send(embed)
    }
}