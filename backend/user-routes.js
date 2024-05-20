const express = require("express");
const UserController = require("./src/controllers/UserController");

const router = express.Router();

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.create);
router.delete("/users/:id", UserController.delete);

module.exports = router;