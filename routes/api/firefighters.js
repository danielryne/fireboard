const router = require("express").Router();
const firefightersController = require("../../controllers/firefightersController");

// Matches with "/api/firefighters"
router.route("/")
  .get(firefightersController.findAll)
  .post(firefightersController.create);

// Matches with "/api/firefighters/:id"
router
  .route("/:id")
  .get(firefightersController.findById)
  .put(firefightersController.update)
  .delete(firefightersController.remove); 
  
module.exports = router;
