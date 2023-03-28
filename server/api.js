import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// router.get("/signups", async (req, res) => {
// 	logger.debug("Welcoming everyone...");
// 	try {
// 		const { rows } = await db.query("SELECT * FROM user_reviews");
// 		res.json(rows);
// 	} catch (err) {
// 		logger.error("%O", err);
// 		res.status(500).json({ error: "An error occurred while fetching items" });
// 	}
// });

router.post("/submit-email", async (req,res)=>{
	const { email } =req.body;
	try{
		await db.query("INSERT INTO email_signup (email) VALUES ($1)", [email]);
		res.status(200).json({ message :"Email saved successfully" });
	}catch(err){

		res.status(500).json({ message:"Internal server error" });
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

//   router.get("/reviews", async (req, res) => {
// 	try {
// 	const result = await db.query("SELECT user_name, review_text FROM user_reviews");
// 	const reviews = result.rows.map((row) => ({ name: row.user_name, comment: row.review_text }));
// 	res.status(200).json(reviews);
// 	} catch (err) {
// 	logger.error("%O", err);
// 	res.status(500).json({ error: "An error occurred while fetching reviews" });
// 	}
//   });

  router.get("/reviews", async (req, res) => {
	try {
	const result = await db.query("SELECT user_name, review_text, date_added FROM user_reviews");
	const reviews = result.rows.map((row) => ({ name: row.user_name, comment: row.review_text, date: row.date_added }));
	res.status(200).json(reviews);
	} catch (err) {
	logger.error("%O", err);
	res.status(500).json({ error: "An error occurred while fetching reviews" });
	}
  });

export default router;
