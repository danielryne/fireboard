const router = require("express").Router();
const firestationsController = require("../../controllers/firestationsController");

// Matches with "/api/firestations"
router.route("/")
  .get(firestationsController.findAll)
  .post(firestationsController.create);

// Matches with "/api/firestations/:id"
router
  .route("/:id")
  .get(firestationsController.findById)
  .put(firestationsController.update)
  .delete(firestationsController.remove);

module.exports = router;
