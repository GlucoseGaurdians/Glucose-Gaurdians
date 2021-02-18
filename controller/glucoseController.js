const db = require("../models/Users");

module.exports = {

  create: function(req, res) {
    db.findByIdAndUpdate(
      req.body.id,
      { $push: { tests: req.body.test } }
    ).then(info => {
      res.json(info)
    }).catch(err => {
      console.log(err)
      res.status(503).end()
    })
  }
}