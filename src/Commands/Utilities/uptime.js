const Command = require("../../Structures/Command")
const Discord = require('discord.js')
const ms = require('ms')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            description: 'Displays Bot Latency',
            category: 'Utilities'
        })
    }
    async run (message) {
        const embed = new Discord.MessageEmbed()
        .setColor('#00bbff')
        .setTitle('Uptime')
        .setDescription(`Uptime: ${ms(this.client.uptime, {long: true})}`)
        message.channel.send(embed)
    }
}