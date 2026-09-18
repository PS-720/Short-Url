import express from "express";
import {
	handleGenerateShortUrl,
	handleGetAnalytics,
	handleRedirectUrl,
} from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateShortUrl);

router.get("/:shortId", handleRedirectUrl);

router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
