const Command = require('../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const api = require('imageapi.js')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Play Rock Paper Scissors',
            category: 'Fun',
            usage: '<rock|paper|scissors>'
        })
    }
    
    async run(message, args) {
        //const command = args.shift().toLowerCase()
        const replies = ['rock', 'paper', 'scissors']
        const result = Math.floor(Math.random() * replies.length)
        const uReply = args[0]

        if(!uReply) {
            return message.channel.send(`Please provide one of these replies: ${replies.join(', ')}`)
        }

        if(!replies.includes(uReply)) {
            return message.channel.send(`Only these responses are accepted: ${replies.join(', ')}`)
        }

        if(replies[result] === uReply) {
            return message.channel.send(`It was a tie`)
        } else if(uReply === 'rock') {
            if(replies[result] === 'rock') {
                return message.channel.send(`I Won The Battle`)
            } else {
                return message.channel.send(`You Won The Battle`)
            } 
        } else if(uReply === 'paper') {
            if(replies[result] === 'paper') {
                return message.channel.send(`I Won The Battle`)
            } else {
                return message.channel.send(`You Won The Battle`)
            }
        } else if(uReply === 'scissors') {
            if(replies[result] === 'scissors') {
                return message.channel.send(`I Won The Battle`)
            } else {
                return message.channel.send(`You Won The Battle`)
            }
        }
    }
}