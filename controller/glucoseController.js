const db = require("../models");

// Defining methods for the bloodsugarController
module.exports = {
  findAll: function(req, res) {
    db.BloodSugarTest
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.BloodSugarTest
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.BloodSugarTest
      .create(req.body)
      // console.log(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  // create: function(req, res) {
  //   console.log( req.body)
  //   res.json(req.body)
  // }
  // update: function(req, res) {
  //   db.BloodSugarTest
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
//   remove: function(req, res) {
//     db.BloodSugarTest
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};