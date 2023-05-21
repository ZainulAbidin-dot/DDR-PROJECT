const mongoose = require("mongoose");
const { DB_URL } = require("../config/index");

module.exports = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://tomsawyer:cBOzYPBrWJvPeipP@cluster0.0w3ziqp.mongodb.net/",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log("Db Connected");
	} catch (error) {
		console.log("Error ============");
		console.log(error);
		process.exit(1);
	}
};
