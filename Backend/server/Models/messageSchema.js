const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema= new Schema({
    sender: String,
    message: String,
    receiver: String
})

const Message = mongoose.model('Message', messageSchema);

module.exports = {Message}