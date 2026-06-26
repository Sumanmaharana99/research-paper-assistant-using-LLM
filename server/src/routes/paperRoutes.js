import express from "express";
import upload from "../middlewares/upload.js";
import { uploadResearchPaper } from "../controllers/paperController.js";
const router = express.Router();
router.post(
    "/upload",
    upload.single("paper"),
    uploadResearchPaper
);
export default router;