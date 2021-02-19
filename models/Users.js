const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: String,
    tests: [{
        date: {
            type: Date,
            default: Date.now
        },
        glucose: Number,
        comment: String
    }],
    meds: [{
        name: String,
        type: {
            type: String,
        },
        doses: [{
            date: {
                type: Date,
                default: Date.now
            },
            amount: String
        }]
    }]
})

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;