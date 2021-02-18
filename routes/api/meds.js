const router = require("express").Router();
const medsController = require('../../controller/medsController')

router.route("/")
    .delete(medsController.removeMed)
    .post(medsController.addNewMedication)
router.route("/dose")
    .post(medsController.takeMedication)

module.exports = router;