const Users = require("../models/Users");

module.exports = {

    addNewMedication: function(req, res) {
        console.log("adding new medication")
        console.log(req.body)
        Users.findByIdAndUpdate(
            req.body.id,
            { $push: { meds: req.body.med } }
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        })
    },

    takeMedication: function(req, res) {
        console.log("adding new dose")
        console.log(req.body)
        console.log(req.body.medName)
        Users.updateOne(
            {"_id": req.body.id,
            "meds.name":req.body.medName},
            { "$push": { "meds.$.doses": req.body.dose } } 
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(300).end()
        })

//         >db.nestedArrayDemo.update({"_id":ObjectId("5c6d73090c3d5054b766a76e"),
//    "EmployeeDetails.EmployeeDepartment":"ComputerScience"}, {"$push":
//    {"EmployeeDetails.$.EmployeeProject": {"Technology":"Python", "Duration":4 }}});
    },

    // removeMed: function(req, res) {
    //     Users.findByIdAndDelete(
    //         req.body.id,
    //         { meds: { name: req.body.med } }
    //     ).then(info => {
    //         res.json(info)
    //     }).catch(err => {
    //     console.log(err)
    //     })
    // }
}