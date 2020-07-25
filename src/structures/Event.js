module.exports = class Event {

    constructor(client, name, options = {}) {
        this.name = name;
        this.client = client;
        this.type = options.once ? 'once' : 'on';
        this.emitter = options.emitter|| this.client;
    }

    async run(...args) {
        throw new Error(`[Error] The Run Method Was Not Passed In ${this.name}`)
    }
};