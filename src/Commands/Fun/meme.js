const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Sends A Meme',
            category: 'Fun',
        })
    }
    
    async run(message, args) {
        const subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes"
        ]
        const subreddit = subreddits[Math.floor(Math.random()*(subreddits.length)-1)]
        let img = await api(subreddit)
        const embed = new MessageEmbed()
        .setTitle(`A meme from /r${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setImage(img)
        .setTimestamp()
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}