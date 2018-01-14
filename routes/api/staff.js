const router = require("express").Router();
const staffController = require("../../controllers/staffController");

// Matches with "/api/books"
router.route("/")
  .get(staffController.findAll)
  .post(staffController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(staffController.findById)
  .put(staffController.update)
  .delete(staffController.remove);

module.exports = router;
