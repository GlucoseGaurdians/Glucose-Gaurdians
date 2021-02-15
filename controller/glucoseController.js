const db = require("../models/index");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.test
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.test
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("server has recived post request")
    console.log(req.body)
    db.BloodSugarTest
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.test
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


//   remove: function(req, res) {
//     db.test
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};


// add a test
// addTest: function (req, res) {
//   db.User
//     .updated({_id: req.body.id},{ $push: { tests: req.body.payload } })
// }