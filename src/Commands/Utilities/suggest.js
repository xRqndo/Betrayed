const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Suggest a idea',
            category: 'Utilities',
            usage: '<suggestion>'
        })
    } 

    async run(message, args) {
        if(!args.length) {
            return message.channel.send(`Please give a suggestion`)
        }

        let channel = message.guild.channels.cache.find((x) => (x.name === 'suggestion' || x.name === 'suggestions'))

        if(!channel) {
            return message.channel.send('There is no channel named suggestion or suggestions')
        }

        const embed = new MessageEmbed()
        .setTitle('Suggestion:')
        .setColor('BLUE')
        .setDescription(args.join(" "))
        .setTimestamp()

        channel.send(embed).then(m => {
            m.react('👍')
            m.react('😐')
            m.react('👎')
        })
    }
}