const mongoose = require('mongoose');

const {Schema} = mongoose;
mongoose.connect(process.env.DB_URL);

const ticketsSchema = new Schema({
    issue:String,
    productname:String,
    date:String,
    customerId:String,
    employeeId:String
});

var ListofTickets = mongoose.model('ListofTicket',ticketsSchema);

module.exports = ListofTickets;