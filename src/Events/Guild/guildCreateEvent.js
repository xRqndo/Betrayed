const Event = require('../../Structures/Event')
const guildConfig = require('../../Models/guildConfig')

module.exports = class guildCreateEvent extends Event {

    constructor(...args) {
        super(...args, {
            name: 'guildCreate'
        });
    }

    async run(guild) {
        try {
            const gConfig = await guildConfig.creeate({
                guildID: guild.id,
            });
            console.log('Bot has joined a server. Saved to DB')
        } catch(err) {
            console.log(err)
        }
    }
}