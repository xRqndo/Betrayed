const Command = require('../../../Structures/Command')

module.exports = class RoleAdd extends Command {

    constructor(...args){
        super(...args,{
            usage: `<member> <role>`,
            category: `Management`,
            aliases: [`remove-role`, `takerole`, 'roleremove']
        })
    }

    async run(message, args) {
        if(!message.member.hasPermission('ADMINSTATOR')) {
            return message.channel.send(`You are missing the Adminstator permission!`)
        }

        const targetUser = message.mentions.users.first()

        if(!targetUser) {
            return message.channel.send('Please provide someone to give a role to.')
        }

        args.shift()

        const roleName = args.join(' ')
        const role = message.guild.roles.cache.find((role) => {
            return role.name === roleName
        })

        if(!role) {
            return message.channel.send(`There is no role name with "${roleName}"`)
        }

        const member = message.guild.members.cache.get(targetUser.id)

        if(member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.channel.send(`${targetUser} No longer has ${roleName}`)
        } else {
            return message.channel.send(`The provided user does not have ${roleName}`)
        }
    }
}