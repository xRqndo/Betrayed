const Discord = require('discord.js');
const Command = require('../../Structures/Command')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['pong'],
            description: 'Displays Bot Latency',
            category: 'Utilities'
        })
    } 

    async run(message) {
        const msg = await message.channel.send('Pinging..');
        const embed = new Discord.MessageEmbed()
        .setColor('#9af8a3')
        .setTitle('Pong!')
        .setDescription(`Bot Latency: ${msg.createdTimestamp - message.createdTimestamp}ms\nApi Latency: ${Math.round(this.client.ws.ping)}ms`)
        msg.edit(embed)
    }
}