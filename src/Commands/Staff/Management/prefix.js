const Command = require('../../../Structures/Command')
const guildModel = require('../../../Models/Guild')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Changes The Prefix For Your Guild',
            usage: '<prefix>',
            category: 'Management'
        })
    }

    async run(message) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('You are missing the permission Adminstrator')
        }

        const req = guildModel.findOne({ id: message.guild.id })
        
        if (!req) {
            return message.channel.send(`No Prefix Provided`)
        }
        if(req) {
            return message.channel.send(`Prefix was changed to ${req.prefix}`)
        }
    }
}