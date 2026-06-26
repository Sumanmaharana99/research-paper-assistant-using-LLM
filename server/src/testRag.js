import loadDocument from "./services/rag/documentLoader.js";
import splitDocuments from "./services/rag/textSplitter.js";
import createVectorStore from "./services/rag/vectorStore.js";
import model from "./services/rag/chatService.js";

const docs = await loadDocument("uploads/research.pdf");

const chunks = await splitDocuments(docs);

const vectorStore = await createVectorStore(chunks);

const retriever = vectorStore.asRetriever({
    k: 3,
});

const question = "What is Differential Privacy?";

const results = await retriever.invoke(question);

const context = results
    .map(doc => doc.pageContent)
    .join("\n\n");
console.log("Retrieved Documents:");

const prompt = `
You are an AI Research Assistant.

Use ONLY the provided context to answer the question.

Rules:
1. Do not use outside knowledge.
2. If the answer is not present in the context, say:
   "I couldn't find the answer in the document."
3. Keep the answer concise.
4. If possible, mention the page number from the metadata.

Context:
${context}

Question:
${question}

Answer:
`;

console.log("\n====================");
console.log("Results Length:", results.length);

console.log("\n===== CONTEXT =====");
console.log(context);

console.log("\n===== PROMPT =====");
console.log(prompt);

const response = await model.invoke(prompt);

console.log("\n===== RESPONSE OBJECT =====");
console.dir(response, { depth: null });

console.log("\n===== RESPONSE CONTENT =====");
console.log(response.content);