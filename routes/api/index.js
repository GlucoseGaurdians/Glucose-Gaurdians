const router = require("express").Router();
const glucoseRoutes = require("./types/glucose");
const Users = require("../../models/Users");
const { json } = require("express");

// Bloodsugar routes
router.use("/bloodsugar", glucoseRoutes);

router.route("/user")
    .post(
        (req, res) => {
            console.log(req.body)
            console.log(req.body.id)
            Users.create(req.body)
                .then(res => console.log(res))
                .catch(err => console.log(err))

        }
    )
router.route("/user/:id")
        .get(
            (req, res) => {
                // console.log(req.params)
                Users.findById(req.params.id)
                .then(info => res.json(info))
                .catch(err => console.log(err))
            }
        )
module.exports = router;
