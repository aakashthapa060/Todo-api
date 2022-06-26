const mongoose = require("mongoose");
const {Schema} = mongoose;

const TodoSchema = new Schema({
	taskName: {
		type: String,
		required: true,
		maxLength: [40, "Length must not be more than 40"]
	},
	date:{
		type:Date,
		default: Date.now
	},
	completed: {
		type: Boolean,
		default: false
	}
})

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel