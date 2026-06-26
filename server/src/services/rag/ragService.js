import loadDocument from "./documentLoader.js";
import splitDocuments from "./textSplitter.js";
import { createVectorStore } from "./vectorStore.js";

export const uploadPaper = async (filePath) => {

    const docs = await loadDocument(filePath);

    const chunks = await splitDocuments(docs);

    await createVectorStore(chunks);

    return {
        success: true,
         message: "Paper embedded successfully."
    };

};


export const askQuestion = async (question) => {
    const vectorStore = getVectorStore();
    const retriever = vectorStore.asRetriever({
        k: 3,
    });

    const results = await retriever.invoke(question);

    const context = results
        .map(doc => doc.pageContent)
        .join("\n\n");

    const prompt = `
You are an AI Research Assistant.

Use ONLY the provided context to answer the question.

If the answer is not present, say:
"I couldn't find the answer in the document."

Context:
${context}

Question:
${question}

Answer:
`;

    const response = await model.invoke(prompt);

    return response.content;
};