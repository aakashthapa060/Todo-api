const express = require("express");
const app = express();
const todos = require("./routes/todos");
const dotenv = require("dotenv");
dotenv.config();

// Routes
app.get("/", (req,res) => {
	res.send("Helo")
})

app.use("api/todos/v1",todos)

// Server
const port = process.env.PORT;
const start = () => {
	try {
		app.listen(port,() => {console.log(`Server is Running on PORT: ${port}`)});
	} catch(e) {
		console.log(e);
	}
}

start();