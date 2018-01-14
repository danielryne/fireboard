const router = require("express").Router();
const fireStationController = require("../../controllers/fireStationController");

// Matches with "/api/books"
router.route("/")
  .get(fireStationController.findAll)
  .post(fireStationController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(fireStationController.findById)
  .put(fireStationController.update)
  .delete(fireStationController.remove);

module.exports = router;
