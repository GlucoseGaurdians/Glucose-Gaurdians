const router = require("express").Router();
const medsController = require('../../controller/medsController')

router.route("/new")
    .post(medsController.addNewMedication)
router.route("/dose")
    .post(medsController.takeMedication)

module.exports = router;