var mongoose = require('mongoose')
const User = new mongoose.Schema({
    username : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    notes : [],

})

module.exports = mongoose.model('user', User)