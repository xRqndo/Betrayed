const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Closes The Bot',
            usage: '',
            category: 'Owner',
        })
    }
    
    async run(message) {
        if(!this.client.owners.includes(message.author.id)) {
            const errembed1 = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`,[
                `You must be a developer for Betrayed to run this command.`,
            ])
            return message.channel.send(errembed1)
        }

        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTimestamp()
        .addField(`Process Exited!`, [
            `**Process Version:** ${process.version}`,
            `**Process Platform:** ${process.platform}`,
            `**Process Uptime:** ${ms(this.client.uptime, {long: true})}`,
            `**Process Exited By:** ${message.author.tag} - (${message.author.id})`,
        ])
        await message.channel.send(embed)

        process.exit()
    }
}