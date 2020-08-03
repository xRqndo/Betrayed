const Command = require('../../../Structures/Command')
const guildModel = require('../../../Models/Guild')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Creates A Document To The Database',
            usage: '',
            category: 'Owner',
        })
    }
    
    async run(message) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('You are missing the permission Adminstrator')
        }

        const doc = new guildModel({ id: message.guild.id })

        if(!doc) {
            doc.save()
            const embed = new MessageEmbed() 
            .addField(`Document Created!`, [
                `**Created By:** ${message.author.username}`,
            ])
            .setColor('GREEN')
            message.channel.send(embed)
        }

        if(doc) {
           const docembed = new MessageEmbed()
           .addField(`Doucment Found!`, [
               `There is already a document for ${message.guild.name}`
           ])
           .setColor('RED')
           message.channel.send(docembed)
        }
}
}