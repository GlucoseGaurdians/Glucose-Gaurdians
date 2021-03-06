const Users = require("../models/Users");

module.exports = {

    addNewMedication: function(req, res) {
        console.log("adding new medication")
        console.log(req.body)
        Users.findByIdAndUpdate(
            req.body.id,
            { $push: { meds: req.body.med } },
            {new: true}
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    },

    takeMedication: function(req, res) {
        Users.findOneAndUpdate(
            {"_id": req.body.id,
            "meds.name":req.body.medName},
            { "$push": { "meds.$.doses": req.body.dose } },
            {new: true}
        ).then(info => {
            console.log("worked")
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    },

    removeMed: function(req, res) {
        console.log("recived call")
        console.log(req.body.med)
        console.log(req.body)
        Users.findOneAndUpdate(
            {"_id": req.body.id,
            "meds.name": req.body.med},
            {"$pull": {"meds": { "name": req.body.med } } },
            {new: true}
        ).then(info => {
            res.json(info)
        }).catch(err => {
        console.log(err)
        res.status(503).end()
        })
    }
}