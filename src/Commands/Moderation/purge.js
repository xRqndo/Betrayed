const { isNull } = require('util');
const Command = require('../../Structures/Command')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['clear', 'nuke'],
            description: 'Delete A Provided Amount Of Messages From Your Current Channel',
            category: 'Moderation',
            usage: '<amount>' 
        })
    }
    
    async run(message, args){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You Are Missing THe Manage Message Permission").then(m =>  m.delete(5000));
        }

        if (0 === null || parseInt(args[0]) <= 0){
            return message.reply("I Cant Delete 0 Messages!").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("I Am Missing The Manage Messages Permission").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100){
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true) 
            .then(deleted => message.channel.send(`I Deleted ${deleted.size} Messages`))
            .catch(err => message.reply(`I Cant Delete 0 Messages!`))
    }
}