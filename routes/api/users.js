const router = require("express").Router();
const userController = require('../../controller/userController')

router.route("/")
    .post(userController.createUser)
router.route("/:id")
    .get(userController.findUser)

module.exports = router;