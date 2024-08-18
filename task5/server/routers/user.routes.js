const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

// CREATE
router.post("/create", createUser);

// READ
router.get("/", getUsers);

// UPDATE
router.patch("/:id/update", updateUser);

// DELETE
router.delete("/:id/delete", deleteUser);

module.exports = router;
