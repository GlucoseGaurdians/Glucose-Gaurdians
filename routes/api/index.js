const router = require("express").Router();
const glucoseRoutes = require("./types/glucose");

// Bloodsugar routes
router.use("/blood_sugar", glucoseRoutes);

module.exports = router;
