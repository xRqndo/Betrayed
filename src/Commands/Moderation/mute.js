const Command = require('../../Structures/Command')
const mutes = require('../../Models/mutes')
const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['m'],
            description: 'Mute A Given Member',
            usage: '<member> [time] [reason]',
            category: 'Moderation'
        })
    }

    async run(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send('You Are Missing Permissions To Run This Command')
        }
        const reason = args.slice(1).join(" ")

        let user = message.mentions.users.first()
        const rawTime = args[1];
        const time = ms(rawTime);

        if(!user) {
            return message.channel.send(`You Did Not Mention A User!`);
        }

        mutes.findOne({ Guild: message.guild.id, User: user.id}, async(err, data) => {
            if (err) {
                console.log(err)
            }
            if(!data){
                let newMutes = new mutes({
                    User: user.id,
                    Guild: message.guild.id,
                    Mutes:[
                        {
                            Moderator: message.author.id,
                            Reason: reason
                        }
                    ]
                })
                newMutes.save()
                message.channel.send(`${user.tag} Has Been Muted For ${reason}`)
            } else {
                data.Mutes.unshift({
                    Moderator: message.author.id, 
                    Reason: reason
                })
            }
            data.save() 
            message.channel.send(`${user.tag} Has Been Muted For ${reason}. They Now Have ${data.Mutes.length}`)
        })
        const DmEmbed = new MessageEmbed()
        .setColor('ORANGE')
        .addField(`You Have Been Muted!`, [
            `**Reason:**${reason}`,
            `**Expires:** ${time}`,
            `**By:** ${message.author.username}`
        ])        
        try {
            user.send(DmEmbed)
        } catch(err) {
            console.catch(err)
        }

        const role = message.guild.roles.cache.find(r => r.name === "Muted")
        member.roles.add(role);
    
        setTimeout(async() => {
            member.roles.remove(role)
            }, time)

        if(!time) {
            member.roles.add(role);
        }
        if(!role) {
            message.channel.send(`There Is Not A Muted Role In This Server.`)
        }
    }
}
