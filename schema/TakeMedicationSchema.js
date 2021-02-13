const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TakeMedicationSchema = new Schema({

    takeMed: [
        {
            day: {
                type: Date,
                default: Date.now
            },

            name:{
                type: String,
                required: "Medication name required"

            },
            amount: {
                type: Number,
                required: "Medication amount is required"
            },

            comment: {
                type: String,
            }
        }]
});

const TakeMedicationSchema = mongoose.model("Take Medication", TakeMedicationSchema);

module.exports = TakeMedicationSchema;