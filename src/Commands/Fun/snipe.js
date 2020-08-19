const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Show The Most Recent Deleted Message In Your Channel (Max Is 10)',
            usage: '[amount]',
            category: 'Fun',
        })
    }
    
    async run(message, args) {
        const snipe = this.client.snipes.get(message.channel.id) || [];
        const msg = snipe[args[0]-1 || 0]
        if(!msg) {
            message.channel.send('No deleted Message Found!')
        }
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(msg.content)
        .setFooter(`Date: ${msg.date} | ${args[0] ||1}/${snipe.length}`)
        if(msg.attatchment) embed.setImage(msg.attatchment)
        message.channel.send(embed)
    }
}