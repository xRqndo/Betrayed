const { MessageEmbed, djsversion } = require('discord.js')
const { version } = require('../../../config.json')
const Command = require('../../Structures/Command')
const { utc } = require('moment')
const { runIndexContext } = require('vm')
const os = require('os')
const ms = require('ms')

module.exports = class extends Command {

    constructor(...args){
        super(...args, {
            aliases: ['bot'],
            description: 'Displays Info About The Bot',
            category: 'Infomation'
        })
    } 
    async run(message) {
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
        .setThumbnail(this.client.displayAvatarURL)
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('General', [
            `**Name:** ${this.client.user.tag} (${this.client.user.id})`,
            `**Commands:** ${this.client.commands.size}`,
            `**Servers:** ${this.client.guilds.cache.size.toLocaleString()}`,
            `**Users:** ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
            `**Channels:** ${this.client.channels.cache.size}`,
            `**Creation Date:** ${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
            `**Node.js** ${process.version}`,
            `**Discord.js:** v12.2.0`,
            `**Version:** 1.0.0`,
        ])
        .addField('System', [
            `**Platform:** ${process.platform}`,
            '**CPU:**',
            `\u3000 Cores: ${os.cpus().length}`,
            `\u3000 Cores: ${core.model}`,
            `\u3000 Cores: ${core.speed}`,
            '**Memory**',
            `\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`
            `\u3000 Used: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`
        ])
        .setTimestamp();
        message.channel.send(embed)
    }
}