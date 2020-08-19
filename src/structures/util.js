const path = require('path')
const { promisify } = require('util')
const { cachedDataVersionTag } = require('v8')
const glob = promisify(require('glob'))
const Event = require('./Event.js')
const Command = require('./Command.js')

module.exports = class Util {
    

    constructor(client){
        this.client = client;
    }

    isClass(input) {
        return typeof input === 'function' &&
        typeof input.prototype === 'object' &&
        input.toString().substring(0, 5) === 'class';
        }

        get directory() {
            return `${path.dirname(require.main.filename)}${path.sep}`;
        }

        removeDuplicates(arr) {
            return [...new Set(arr)];
        }

        trimArray(arr, maxLen = 10) {
            if (arr.length > maxLen) {
            const len = arr.length - maxLen,
            arr = arr.slice(0, maxLen);
            arr.push(`${len} more...`);
        }
            return arr;
        }

        formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
            const i = Math.floor(Math.log(bytes) / Math.log(1024))
            return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[1]}`
        }

        capitalise(string) {
            return string.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ')
        }

        doKissAction() {
            const rand = [
                'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
                'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
                'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
                'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
                'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
                'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
                'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
                'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
                'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'
            ];

            return rand[Math.floor(Math.random() * rand.length)]
        }

        async loadCommands() {
            return glob(`${this.directory}commands/**/**/*.js`).then(commands => {
                for (const commandFile of commands) {
                    delete require.cache[commandFile];
                    const { name } = path.parse(commandFile);
                    const File = require(commandFile);
                    if (!this.isClass(File)) throw new TypeError(`[Type Error] Command ${name} Doesn't Export A Class`);
                    const command = new File(this.client, name.toLowerCase());
                    if (!(command instanceof Command)) throw new TypeError(`[Type Error] Command ${name} Doesnt Belong In Commands`);
                    this.client.commands.set(command.name, command);
                    if(command.aliases.length) {
                        for (const alias of command.aliases) {
                            this.client.aliases.set(alias, command.name);
                        }
                    }
                }
            }
        )}
        async loadEvents() {
            return glob(`${this.directory}events/**/*.js`).then(events => {
                for (const eventFile of events) {
                    delete require.cache[eventFile];
                    const { name } = path.parse(eventFile);
                    const File = require(eventFile)
                    if (!this.isClass(File)) throw new TypeError(`[Type Error] Event ${name} Doesn't Export A Class`);
                    const event = new File(this.client, name);
                    if (!(event instanceof Event)) throw new TypeError(`[Type Error] Event ${name} Doesn't Belong In The Events Directory`)
                    this.client.events.set(event.name, event);
                    event.emitter[event.type](name, (...args) => event.run(...args))
                }
            })
        }
  
        }