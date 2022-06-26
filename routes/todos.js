const express = require("express");
const router = express.Router();

// Controllers
const {
	getAllTodos,
	getParticularTodo,
	createTodo,
	deleteTodo,
	updateTodo
} = require("../controllers/todos");

// console.log(require("../controllers/todos"))
// Routes
router
.route("/")
.get(getAllTodos)
.post(createTodo)

router
.route("/:id")
.get(getParticularTodo)
.patch(updateTodo)
.delete(deleteTodo)


module.exports = router;