const { Client, Collection} = require('discord.js');
const Util = require('./util')

module.exports = class BetrayedClient extends Client {

    constructor(options = {}) {
        super({
            disableMentions: 'everyone'
        });
        this.validate(options)

        this.commands = new Collection()

        this.aliases = new Collection()

        this.events = new Collection()

        this.utils = new Util(this)

        this.owners = options.owners
    }

    validate(options) {
        if (typeof options !== 'object')throw new TypeError('[Type Error] Options Should Be A Type Of Object.');

        if(!options.token) throw new Error('[Error] You Must Pass A Token For The Client');
        this.token = options.token;

        if(!options.prefix) throw new Error(`[Error] You Must Pass A Prefix For The Client`);
        if(typeof options.prefix !== 'string' ) throw new TypeError('[Type Error] Prefix Should Be A String');
        this.prefix = options.prefix;
        }


    async start(token = this.token) {
        this.utils.loadCommands();
        this.utils.loadEvents();
        super.login(token);
    }
}