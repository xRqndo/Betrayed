const Command = require('../../../Structures/Command')
const { MessageEmbed } = require('discord.js')
const os = require('os')
const util = require('../../../Structures/util')
const ms = require('ms')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: 'Shows Process and CPU Information',
            usage: '',
            category: 'Owner',
            aliases: ['cpuinfo', 'pi', 'ci']
        })
    }
    
    async run(message) {
        if(!this.client.owners.includes(message.author.id)) {
            const errembed1 = new MessageEmbed()
            .setColor('RED')
            .addField(`Error!`,[
                `*You must be a developer for Betrayed to run this command.`,
            ])
            return message.channel.send(errembed1)
        }
        const core = os.cpus()[0];

        const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
        arr.reverse();
        const used = process.memoryUsage().heapUsed / 1024 / 1024;

        const channel = '740426923469045852'

        const embed = new MessageEmbed()
        .setColor('BLUE')
        .addField(`Process Info:`, [
            `**Process:** ${process.version}`,
            `**Process Platform:** ${process.platform}`,
            `**Process ID:** ${process.pid}`,
            `**Process Architecture:** ${process.arch}`,
            `**Process Environment:** ${process.env}`,
            `**Process Uptime:** ${ms(this.client.uptime, {long: true})}`,
            `**Process Directory:** ${process.cwd()}`,
        ])
        .addField(`CPU Info:`, [
            `**Cores:** ${os.cpus().length}`,
            `**Model:** ${core.model}`,
            `**Speed:** ${core.speed}MHz`,
        ])
        message.channel.send(embed)


        channel.send(`Process Info Has Been Ran By ${message.author.user}#${message.author.discriminator}`)
        }
    }
