const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
	return res.send(200).json({ msg: "Hello from Computer" });
});

app.listen(8003, () => {
	console.log("Listening Shopping on Port: 8003");
});
