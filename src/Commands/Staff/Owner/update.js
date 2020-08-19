const { MessageEmbed } = require('discord.js');
const Command = require('../../../Structures/Command')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Announce something in #betrayed-announcements',
            category: 'Developer',
            usage: '<title> <announcment>'
        })
    } 

    async run(message, args) {
        if(!this.client.owners.includes(message.author.id)) {
            return message.channel.send('You are not a developer for Berayed!')
        }

        const title = args[0]

        if(!args.length) {
            return message.channel.send(`Please give a update to announce`)
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === 'betrayed-updates'))
        
        const channel2 = '740426923469045852'

        const embed = new MessageEmbed()
        .setTitle('Update:')
        .setColor('0xc449fe')
        .setDescription(args.join(" "))
        .setTimestamp()

        channel.send(embed)

        channel2.send(embed)

    }
}