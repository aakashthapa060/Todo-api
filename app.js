const express = require("express");
const app = express();
const todos = require("./routes/todos");
const connect = require("./db/connect");
const dotenv = require("dotenv");
dotenv.config();

// Middleware
app.use(express.json());
// Routes
app.get("/", (req,res) => {
	res.send("Welcome");
});

app.use("/api/todos/v1",todos);

// Server
const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const start = async () => {
	try {
		await connect(MONGO_URI)
		app.listen(port,() => {console.log(`Server is Running on PORT: ${port}`)});
	} catch(e) {
		console.log(e);
	}
}

start();