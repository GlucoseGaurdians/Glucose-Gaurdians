const db = require("../models/Users");


// const sample = {
//   _id: 'test1',
//   fname: 'John',
//   lname: 'Smith',
//   email: 'john@john.com',
//   tests: [{
//       glucose: 120,
//       comment: 'Hello world'
//   }],
//   meds: [{
//       name: 'insulin',
//       type: 'prescribed',
//       doses: [{
//           amount: '50mg'
//       }]
//   }]
// }

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    console.log("server has recived post request")
    console.log(req.body)

    db.findByIdAndUpdate(
      req.body.id,
      { $push: { tests: req.body.test } }
    ).then(info => {
      res.json(info)
    }).catch(err => {
      console.log(err)
    })
      // .create(req.body)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },

  // update: function(req, res) {
  //   db.test
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }


//   remove: function(req, res) {
//     db.test
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };


// add a test
// addTest: function (req, res) {
//   db.User
//     .updated({_id: req.body.id},{ $push: { tests: req.body.payload } })
}