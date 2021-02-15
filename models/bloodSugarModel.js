const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BloodSugarSchema = new Schema({

    test: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            glucose: {
                type: Number,
                // required: "Blood sugar reading is Required"
                required: true
            },

            comment: {
                type: String,
            }
        }]
});

const BloodSugarTest = mongoose.model("BloodSugarTest", BloodSugarSchema);

module.exports = BloodSugarTest;


const UsersSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    tests: [{
        date: {
            type: Date,
            default: Date.now
        },
        glucose: {
            type: Number,
        },
        comment: {
            type: String,
        }
    }],
    meds: [{
        name: String,
        doses: [{
            date: {
                type: Date,
                default: Date.now
            },
            amount: String
        }]
    }]

})
