const mongoose = require('mongoose')

const newID = new mongoose.Schema({
    ID: String,
    Ticket: Boolean,
})

module.exports = mongoose.model('TicketData', newID)