const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloodSugarSchema = new Schema({

    test: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            glucose: {
                type: Number,
                required: "Blood sugar reading is Required"
            },

            comment: {
                type: String,
            }
        }]
});

const BloodSugarTest = mongoose.model("BloodSugarTest", bloodSugarSchema);

module.exports = BloodSugarTest;

