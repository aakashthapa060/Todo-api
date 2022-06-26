const express = require("express");
const router = express.Router();

// Controllers
const {
	getAllTodos,
	getParticularTodo,
	deleteTodo,
	updateTodo
} = require("../controllers/todos");

// Routes
router
.route("/")
.get(getAllTodos)


module.exports = router;