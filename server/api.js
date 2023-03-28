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

export default router;
