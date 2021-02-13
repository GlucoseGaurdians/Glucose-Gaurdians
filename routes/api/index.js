const router = require("express").Router();
const glucoseRoutes = require("./glucose");

// Bloodsugar routes
router.use("/bloodsugar", glucoseRoutes);

module.exports = router;
