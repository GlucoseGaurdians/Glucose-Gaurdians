const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const glucoseRoutes = require("./api/glucose")

// API Routes
// router.use("/api", apiRoutes);

router.use("/api/bloodsugar", glucoseRoutes)
router.use("/api/user", userRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
