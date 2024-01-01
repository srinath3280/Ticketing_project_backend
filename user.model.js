const mongoose = require('mongoose');

const {Schema} = mongoose;
mongoose.connect(process.env.DB_URL);

const customerDetailsSchema = new Schema({
    fullname:String,
    username:String,
    password:String,
    role:String
});

var CustomerDetails = mongoose.model('CustomerDetail',customerDetailsSchema);

module.exports = CustomerDetails;