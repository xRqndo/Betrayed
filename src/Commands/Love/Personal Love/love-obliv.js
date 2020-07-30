const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['love-oblivion'],
            category: 'Owner'
        })
    }

    async run(message) {
        if(!this.client.guildPrivate.includes(message.guild.id)) {
            return message.channel.send('You can not use this command in this server!')
        }
        const embed = new MessageEmbed()
        .addField(`**Oblivion:**`, [
            `Dating Chloe`
        ])
        .setColor('#fe7def')
        message.channel.send(embed)
    }
}