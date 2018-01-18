const router = require("express").Router();
const firefighterRoutes = require("./firefighters");
const firestationRoutes = require("./firestations");

// API routes
router.use("/firefighters", firefighterRoutes);
router.use("/firestations", firestationRoutes);


module.exports = router;
