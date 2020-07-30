const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Love Tree',
            aliases: ['love'],
            category: 'Love'
        })
    }

    async run(message) {
        if(!this.client.owners.includes(message.author.id)) {
            return message.channel.send('You Can Not Use This Command!')
        }

        const embed = new MessageEmbed()
        .addField(`Celtic:`, [
            `Likes Chimmy`,
            `Provides xRqndo Attention`
        ])
        .addField(`Chimmy:`, [
            `Celtics Crush`,
            `No Idea What To Put Here`
        ])
        .addField(`xRqndo:`, [
            `Likes Celtic`,
            `Jealous Of Chimmy`
        ])
        .addField(`Chloe:`, [
            `Dating Oblivion`,
            `Oblivion Can Make Her Horny As Fuck`
        ])
        .addField(`Oblvion:`, [
            `Dating Chloe`,
            `Chloe Can Make Oblivion Horny`
        ])

        .addField(`Siiwai/Kawaili`, [
            `Dating Xim`,
            `Likes Lolis`
        ])
        .addField(`Xim`, [
            `Dating Siiwai/Kawaili`,
            `I Dont Know What To Put Here`
        ])
        .setColor('#fe7def')
        message.channel.send(embed)
    }
}