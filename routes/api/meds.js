const router = require("express").Router();
const medsController = require('../../controller/medsController')

router.route("/")
    .post()
router.route("/:id")
    .get()

module.exports = router;