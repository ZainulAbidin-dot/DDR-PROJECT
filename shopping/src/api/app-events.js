const ShoppingService = require("../services/");

module.exports = (app) => {
	const service = new CustomerService();

	app.use("/app-events", async (req, res) => {
		const { payload } = req.body;
		service.SubscribeEvents(payload);

		console.log("Shopping Service Recieved Event");
		return res.status(200).json(payload);
	});
};
