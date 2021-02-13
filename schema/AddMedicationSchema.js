const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddMedicationSchema = new Schema({

    addMed: [
        {
            date: {
                type: Date,
                default: Date.now
            },

            name:{
                type: String,
                required: "Medication name required"

            },
            type: {
                type: String,
                required: "Medication amount is required"
            },

            measure: {
                type: String,
            }
        }]
});

const AddMedicationSchema = mongoose.model("Add Medication", AddMedicationSchema);

module.exports = AddMedicationSchema;