const Event = require('../../Structures/Event')

module.exports = class extends Event {

    async run(message) {
        const MentionRegex = RegExp(`^<@!${this.client.user.id}>$`);
        const MentionRegexPrefix = RegExp(`^<@!${this.client.user.id}> `);
        if(!message.guild || message.author.bot);

        if(message.content.match(MentionRegex)) message.channel.send(`My Prefix For ${message.guild.name} Is \`${this.client.prefix}\``)

        const prefix = message.content.match(MentionRegexPrefix) ?
        message.content.match(MentionRegexPrefix)[0] : this.client.prefix

        if(!message.content.startsWith(prefix)) return;

        // eslint-disable-next-line no-unused-vars
        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()))
        if (command) {
            command.run(message, args);
        }
    }
}