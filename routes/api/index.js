const router = require("express").Router();
//!! Change the const bookRoutes to say firefighters then ./books needs to be ./fireFighters or some such !! - James//
const staffRoutes = require("./staff");

// Book routes
// !! change books !! - James //
router.use("/staff", staffRoutes);

module.exports = router;
