const router = require("express").Router();
const glucoseRoutes = require("./glucose");

// Bloodsugar routes
router.use("/blood_sugar", glucoseRoutes);

module.exports = router;
