import { Router } from "express";
require("dotenv").config();
const { transporter } = require("./mailer");


import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.post("/submit-email", async (req, res) => {

	const email = req.body.email;
	const existingEmail = await db.query(
		"SELECT * FROM email_signup WHERE email=$1",
		[email]
	);
	if (existingEmail.rows.length > 0) {
		return res.status(400).json({ message: "Email already exists" });
	}

	try {
		const result = await db.query("INSERT INTO email_signup (email) VALUES ($1) ", [email]);

		const mailOptions = {
			from: process.env.EMAIL,
			to: email,
			subject: "Welcome to our website",
			text: `Thank you for signing-up to ACE's newsletter. Visit our website here "https://animalcharityevaluators.org/"`,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.error(error);
			} else {
				console.error("Email sent: " + info.response);
			}
		});

		res.status(201).json(result.rows[0]);

	} catch (err) {

		res.status(500).json({ message: "Internal server error" });
	}
});

router.post("/reviews", async (req, res) => {
	const { name, comment } = req.body;
	try {
		await db.query("INSERT INTO user_reviews (user_name, review_text) VALUES ($1, $2)", [name, comment]);
		res.status(200).json({ message: "Review added successfully" });
	} catch (err) {
		logger.error("%O", err);
		res.status(500).json({ error: "An error occurred while adding review" });
	}
});


router.get("/reviews", async (req, res) => {
	try {
		const result = await db.query("SELECT user_name, review_text, date_added FROM user_reviews ORDER BY date_added DESC");
	const reviews = result.rows.map((row) => ({ name: row.user_name, comment: row.review_text, date: row.date_added }));
	res.status(200).json(reviews);
	} catch (err) {
		logger.error("%O", err);
		res.status(500).json({ error: "An error occurred while fetching reviews" });
	}
});

export default router;
