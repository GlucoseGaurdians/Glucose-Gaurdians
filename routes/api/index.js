const router = require("express").Router();
const glucoseRoutes = require("./types/glucose");

// Bloodsugar routes
router.use("/bloodsugar", glucoseRoutes);

module.exports = router;
