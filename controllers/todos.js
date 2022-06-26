const Todo = require("../db/models/Todos");

const getAllTodos = async (req,res) => {
	try {
		const todos = await Todo.find({});
		res.status(200).json({todos});
	} catch(e) {
		// statements
		console.log(e);
	}
}

const getParticularTodo = async (req,res) => {
	try {
		const id = req.params.id;
		const todo = await Todo.findById(id)
		if(!todo){
			return res.status(404).json({msg:`Couldn't able to find any Todo with the ID: ${id}`})
		}
		res.status(200).json({todo})
	} catch(e) {
		// statements
		 res.status(404).json({msg:`Couldn't able to find any Todo with the ID`})
	}
}
const createTodo = async (req,res) => {
	try {
		const todo = await Todo.create(req.body);
		res.status(201).json({todo});
	} catch(e) {
		console.log(e);
	}

}
const deleteTodo= async (req,res) => {
	try {
		const id = req.params.id;
		const todo = await Todo.findOneAndDelete(id);
		if(!todo){
			return res.status(404).json({msg:`Couldn't able to find any Todo with the ID: ${id}`})
		}
		res.send(200).json({"msg": `Successfully Deleted the Todo with the ID of ${id}`});
	} catch(e) {
		// statements
		console.log(e);
	}

}

const updateTodo = async (req,res) => {
	res.status(200).json({msg:"success Updating One Task"})

}

module.exports = {
	getAllTodos,
	getParticularTodo,
	createTodo,
	deleteTodo,
	updateTodo
}