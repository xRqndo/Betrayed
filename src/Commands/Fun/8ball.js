const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Tells You Answers',
            category: 'Fun',
            usage: '<question>'
        })
    }
    
    async run(message, args) {
        const question = args.join(" ")

        if(!question) {
            return message.channel.send(`You must provide a question.`)
        } else {
            const responses = [
                `● It is certain.`,
                `● It is decidedly so.`,
                `● Without a doubt.`,
                `● Yes – definitely.`,
                `● You may rely on it.`,
                `● As I see it, yes.`,
                `● Most likely.`,
                `● Outlook good.`,
                `● Yes.`,
                `● Signs point to yes.`,
                `● Reply hazy, try again.`,
                `● Ask again later.`,
                `● Better not tell you now.`,
                `● Cannot predict now.`,
                `● Concentrate and ask again.`,
                `● Don't count on it.`,
                `● My reply is no.`,
                `● My sources say no.`,
                `● Outlook not so good.`,
                `● Very doubtful.`,
            ]
            const Response = responses[Math.floor(Math.random() * (responses.length)-1)]
            const embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .addField(`8Ball:`, [
                `**Question:** ${question}`,
                `**Answer:** ${Response}`
            ])
            .setTimestamp()
            return message.channel.send(embed)
        }
    }
}