const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command')
const moment = require('moment')

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydney: 'Sydney',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports = class extends Command {

    constructor(...args) {
        super(...args,{
			aliases: ['server', 'guild', 'guildinfo'],
			description: 'Displays Info About The Server',
            category: 'Infomation'
        })
	} 
	
	async run(message) {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()
		.setTitle(`Server Info For ${message.guild.name}`)
		.addField('General', [
			`**Name:**: ${message.guild.name}`,
			`**ID:** ${message.guild.id}`,
			`**Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
			`**Region:** ${regions[message.guild.region]}`,
			`**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
			`**Explict Filter:** ${filterLevels[message.guild.explictCotentFilter]}`,
			`**Verification Levels:** ${verificationLevels[message.guild.verificationLevel]}`,
			`**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
		])
		.addField(`Statistics`, [
			`**Role Count:**: ${roles.length}`,
			`**Emoji Count:**: ${emojis.size}`,
			`**Regular Emoji Count:**: ${emojis.filter(emoji => !emoji.animated).size}`,
			`**Animated Emoji Count:**: ${emojis.filter(emoji => emoji.animated).size}`,
			`**Member Count:**: ${message.guild.memberCount}`,
			`**Human Count:**: ${members.filter(member => !member.user.bot).size}`,
			`**Bot Count:**: ${members.filter(member => member.user.bot).size}`,
			`**Text Channels:**: ${channels.filter(channel => channel.type === 'text').size}`,
			`**Voice Channels:**: ${channels.filter(channel => channel.type === 'voice').size}`,
			`**Boost Count:**: ${message.guild.premiumSubcriptionCount || [0]}`,
		])
		.setColor('BLUE')
		.setThumbnail(message.guild.iconURL({ dynamic: true}))
		.addField(`Presence`, [
			`**Online:**: ${members.filter(member => member.presence.status === 'online').size}`,
			`**Do Not Disturb:**: ${members.filter(member => member.presence.status === 'dnd').size}`,
			`**Idle:**: ${members.filter(member => member.presence.status === 'idle').size}`,
			`**Offline:**: ${members.filter(member => member.presence.status === 'offline').size}`,
		])
	//	.addField(`Roles`, [
	//	`**Roles[${roles.length - 1}]:**`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None',
	//	])
		message.channel.send(embed)
		}
	} 