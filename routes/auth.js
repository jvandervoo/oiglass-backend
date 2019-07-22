const router = require("express").Router();
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

router.post("/submit", cors(), async (req, response) => {
	dotenv.config();
	const listId = req.body.list;
	try {
		res = await axios({
			method: "POST",
			url: `https://api.createsend.com/api/v3.2/subscribers/${listId}.json`,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Basic " + process.env.API_KEY
			},
			data: {
				EmailAddress: req.body.email,
				Name: req.body.name,
				CustomFields: req.body.quizAnswers,
				Resubscribe: true,
				RestartSubscriptionBasedAutoresponders: true,
				ConsentToTrack: "Yes"
			}
		});

		response.send("Successfully posted!");
	} catch (err) {
		response.send("Error: " + err);
	}
});

module.exports = router;
