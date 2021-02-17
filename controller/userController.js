const Users = require("../models/Users");

module.exports = {

    createUser: function(req, res) {
        Users.create(req.body)
            .then(info => res.json(info))
            .catch(err => res.status(422).json(err))
    },

    findUser: function(req, res) {
        Users.findById(req.params.id)
        .then(info => res.json(info))
        .catch(err => res.status(422).json(err))
    }
}