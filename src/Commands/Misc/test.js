const Command = require('../../Structures/Command')

module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            name: 'test',
            description: 'Test Command',
            aliases: ['test1']
        })
    }
    
    async run(message, args) {
        message.channel.send('Worked!')
    }
}