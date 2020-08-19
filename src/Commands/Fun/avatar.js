const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Get your avatar or someones elses avatar.',
            usage: '[user]',
            category: 'Fun',
        })
    }
    
    async run(message, args) {
        const user = message.mentions.users.first()
        if(!user) {
            const YourAvatar = new MessageEmbed()
            .setTitle('Your Avatar:')
            .setImage(message.author.displayAvatarURL())
            .setColor('RANDOM') 
            .setTimestamp()
            return message.channel.send(YourAvatar)
        } else {
            const UserEmbed = new MessageEmbed()
            .setTitle(`${user.tag}'s Avatar:`)
            .setImage(user.displayAvatarURL())
            .setColor('RANDOM')
            .setTimestamp()
            return message.channel.send(UserEmbed)
        }
    }
}