const Command = require('../../Structures/Command')
const beautify = require('beautify')
const { MessageEmbed, Discord } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Creates A Document To The Database',
            usage: '',
            category: 'Owner',
        })
    }
    
    async run(message, args) {
        if(!this.client.owners.includes(message.author.id)) {
            const errembed1 = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`,[
                `**Error:** You must be a developer for Betrayed to run this command.`,
            ])
            return message.channel.send(errembed1)
        }

        const code = args[0]
        const toEval = args.join(" ");
        const evaluated = eval(toEval);
        const member = message.mentions.members.last() || message.member;

        if(!code) {
            const errembed = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`,[
                `You must provide code for me to evaluate.`,
            ])
            message.channel.send(errembed)
        }

        try {
            if(args.join(" ").toLowerCase().includes("token")) {
            return;
            }
            if(args.join(" ").toLowerCase().includes("process.exit()")) {
                return;
            }

            const embed = new MessageEmbed()
            .setColor(member.displayNameColor || '0x7feffe')
            .setTimestamp()
            .setTitle('Eval')
            .addField(`To Evaluate:`, `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
            .addField(`Evaluated`, evaluated)
            .addField(`Type of:`, typeof(evaluated))

            message.channel.send(embed)
        } catch(err) {
            const errembed2 = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`,[
                `${err}`
            ])
            return message.channel.send(errembed2)
        }
    }
}