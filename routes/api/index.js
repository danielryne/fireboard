const router = require("express").Router();
const firefighterRoutes = require("./firefighters");

// Book routes
router.use("/firefighters", firefighterRoutes);

module.exports = router;
