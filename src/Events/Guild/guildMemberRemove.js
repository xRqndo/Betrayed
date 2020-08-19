const Event = require('../../Structures/Event')

module.exports = class extends Event {
    constructor(...args) {
    super(...args, {
        on: true
    })
}

async run(message) {
    const memberlog = '740435158582296668'
    this.client.on('guildMemberRemove', member => {
        if(member.guild.id !== '733490914487435395') return;

        this.client.channels.cache.get(memberlog).send(`<@!${member.user.id}>, Has left us..`)
    })
}
}