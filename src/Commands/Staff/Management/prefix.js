const Command = require('../../../Structures/Command')
const db = require('quick.db')
const { default_prefix } = require('../../../../config.json')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Changes The Prefix For Your Guild',
            usage: '<prefix>',
            category: 'Management'
        })
    }

    async run(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('You are missing the permission Adminstrator')
        }
    }
}