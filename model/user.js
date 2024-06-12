const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    u_id: {type: Number, unique: true, required: true},
    u_name: {type: String, unique: true, required: true},
    u_pwd: String,
    u_email: String,
    u_add: String,
    u_cont: Number
});

module.exports = mongoose.model('User', userSchema);
