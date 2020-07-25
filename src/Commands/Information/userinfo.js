const Command = require('../../Structures/Command')
const { MessageEmbed, UserFlags } = require(`discord.js`) 
const moment = require('moment')

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['user', 'ui'],
            description: 'Displays Info About The Provided User Or The Author',
            category: 'Infomation',
            usage: '[user]'
        })
    }

    async run(message, [target]) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const roles = member.roles.cache
        .sort((a, b) => b.postion - a.postion)
        .map(role => role.toString())
        .slice(0, -1);
        const userFlags = member.user.flags.toString();
        const embed = new MessageEmbed()
         .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
         .addField(`User`, [
         `**Username:** ${member.user.username}`,
         `**Discriminator:** ${member.user.discriminator}`,
         `**ID:** ${member.id}`,
         `**Avatar:** [Link To Avatar](${member.user.displayAvatarURL({dynamic: true, size: 512})})`,
         `**Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
         `**Status:** ${member.user.presence.status}`,
         `**Game:** ${member.user.presence.game || 'Not Playing A Game'}`,
         ])
         .addField(`Member` , [
            `**Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
            `**Server Joined At:** ${moment(member.joinedAt).format('LL LTS')}`,
            `**Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
            `**Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length < 10 ? this.client.utils.trimArray(roles) : 'None'}`
         ])
         .setColor(member.displayNameColor || 'BLUE')
       message.channel.send(embed);
    }
};