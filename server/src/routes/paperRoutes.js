import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadPaper } from "../controllers/paperController.js";
const router = express.Router();

router.post(
    "/upload",
    upload.single("paper"),
    uploadPaper
);

export default router;