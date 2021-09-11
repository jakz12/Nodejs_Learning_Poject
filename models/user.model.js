const mongoose = require('mongoose');

var userSchema =  mongoose.Schema({
    userName : {
        type : String,
        require : true,
        unique : true,
        trim : true,
        minlength : 3
    }
},
{
    timestamps : true,
});

const user = mongoose.model('User',userSchema);
module.exports = user;