const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BloodSugarSchema = new Schema({

    test: [
        {
            day: {
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

const BloodSugarSchema = mongoose.model("BloodSugar", BloodSugarSchema);

module.exports = BloodSugarSchema;