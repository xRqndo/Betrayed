const { MessageEmbed, MessageFlags } = require('discord.js');
const Command = require('../../../Structures/Command')
const warns = require('../../../Models/warns')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            category: 'Moderation',
            usage: '<user> <reason>',
            description: 'Warn A Given User'
        })
    }
    async run(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply('You are missing the required permissions to run').then(m => m.delete(5000));
        }
        const reason = args.slice(1).join(" ")

        let user = message.mentions.users.first()
        if(!user) {
            return message.channel.send(`You Did Not Mention A User!`).then(m => m.delete(5000));
        }
        if(!reason) {
            return message.channel.send(`You Did Not Provide A Reason!`).then(m => m.delete(5000));
        }
        if(message.member.id === this.client.id){
            return message.channel.send('I cant warn myself!')
        }
        warns.findOne({ Guild: message.guild.id, User: user.id}, async(err, data) => {
            if (err) {
                console.log(err)
            }
            if(!data){
                let newWarns = new warns({
                    User: user.id,
                    Guild: message.guild.id,
                    Warns:[
                        {
                            Moderator: message.author.id,
                            Reason: reason
                        }
                    ]
                })
                newWarns.save()
                message.channel.send(`${user.tag} Has Been Warned For ${reason}`).then(m => m.delete(5000));
            } else {
                data.Warns.unshift({
                    Moderator: message.author.id, 
                    Reason: reason
                })
            }
            data.save() 
            message.channel.send(`${user.tag} Has Been Warned For ${reason}. They Now Have ${data.Warns.length}`).then(m => m.delete(5000));
        })
        const DmEmbed = new MessageEmbed()
        .setColor('ORANGE')
        .addField(`You Have Been Warned!`, [
            `**Reason:**${reason}`,
            `**By:** ${message.author.username}`
        ])        
        try {
            user.send(DmEmbed)
        } catch(err) {
            console.warn(err)
        }
    }
}