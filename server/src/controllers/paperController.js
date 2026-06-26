import { uploadPaper } from "../services/rag/ragService.js";

export const uploadResearchPaper = async (req, res) => {
    try {
        await uploadPaper(req.file.path);
        res.status(200).json({
            success: true,
            message: "Paper uploaded successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};