const Command = require('../../Structures/Command')
const Guild = require('../../Models/Guild')
const { MessageEmbed } = require('discord.js')
const { set } = require('mongoose')


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Changes The Prefix For Your Guild',
            usage: '<prefix>',
            category: 'Owner'
        })
    }

    async run(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send('You are missing the permission Adminstrator').then(m => m.delete({timeout: 5000}))
        }

        const settings = Guild.findOne({
            guildID: message.guild.id,
           }, (err, guild) => {
               if(err) {
                   console.log(err)
                   const errembed = new MessageEmbed()
                   .setTitle('RED')
                   .addField(`Error!`,[
                       `**Error:** There Was A Unknown Error!`,
                   ])
                   .setFooter(`Please Dm The Betrayed Developer Team And Notifiy Them Of This Error.`)
                   message.channel.send(errembed)
               }
                   if(!guild) {
                   const newGuild = new Guild({
                       _id: Schema.Types.ObjectId,
                       guildID: String,
                       guildName: String,
                       prefix: {
                           default: '.',
                           type: String,
                       },
                    })

                    newGuild.save()
                    .then(result => console.log(result))
                    .catch(err => console.error(err))
                    const errembed1 = new MessageEmbed()
                    .setTitle('RED')
                    .addField(`Error!`,[
                        `**Error:** The Database Was Not Able To Make A Documnet For This Server.`,
                    ])
                    .setFooter(`Please Dm The Betrayed Developer Team And Notifiy Them Of This Error.`)
                    message.channel.send(errembed1)
                   }
           }
       ) 

        if(!args.length > 3) {
            return message.channel.send('The max amount of characters allowed in a prefix is 3!').then(m => m.delete({timeout: 5000}))
        }

        if(!args[0]) {
            return message.channel.send(`You must provide a prefix your current one is ${settings.prefix}`).then(m => m.delete({timeout: 5000}))
        }

        await settings.updateOne({
            prefix: args[0]
        })

        message.channel.send(`Your server prefix has been updated to ${args[0]}`)
    }}