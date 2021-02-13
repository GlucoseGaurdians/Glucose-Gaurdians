const router = require("express").Router();
const glucoseController = require("../../controller/glucoseController");

// Matches with "/api/bloodsugar"
router.route("/")
  .get(glucoseController.findAll)
  .post(glucoseController.create);

// Matches with "/api/bloodsugar/:id"
// router
//   .route("/:id")
//   .get(glucoseController.findById)
//   .put(glucoseController.update)
//   // .delete(glucoseController.remove);

router.route("/BloodSugarPage")
.get(glucoseController.findAll)
// console.log(id)

module.exports = router;
