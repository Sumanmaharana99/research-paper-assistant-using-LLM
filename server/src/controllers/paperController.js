export const uploadPaper = async (req, res) => {

    console.log(req.file);

    res.json({
        success: true,
        message: "Paper Uploaded",
        file: req.file,
    });

};