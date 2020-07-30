const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            category: 'Love'
        })
    }

    async run(message) {
        if(!this.client.owners.includes(message.author.id)) {
            return message.channel.send('You Can Not Use This Command!')
        }
        const embed = new MessageEmbed()
        .addField(`**xRqndo:**`, [
            `Jealous Of Chimmy`,
            `Likes Celtic A Little`,
            `Horny To Chloe`
        ])
        .setColor('#fe7def')
        message.channel.send(embed)
    }
}