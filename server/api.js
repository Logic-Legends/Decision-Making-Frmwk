import { Router } from "express";

import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/signups", async (req, res) => {
	logger.debug("Welcoming everyone...");
	try {
		const { rows } = await db.query("SELECT * FROM user_reviews");
		res.json(rows);
	} catch (err) {
		logger.error("%O", err);
		res.status(500).json({ error: "An error occurred while fetching items" });
	}
});

router.post("/submit-email", async (req,res)=>{
	const {email} =req.body;
	try{
		await db.query("INSERT INTO email_signup (email) VALUES ($1)", [email]);
		res.status(200).json({message :"Email saved successfully"});
	}catch(err){
		
		res.status(500).json({message:"Internal server error"});
	}
});

export default router;
