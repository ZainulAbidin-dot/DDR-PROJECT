const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
	return res.send(200).json({ msg: "Hello from Computer" });
});

app.listen(8001, () => {
	console.log("Listening Customer on Port: 8001");
});
