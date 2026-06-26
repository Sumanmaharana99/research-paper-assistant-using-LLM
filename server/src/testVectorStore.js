import loadDocument from "./services/rag/documentLoader.js";
import splitDocuments from "./services/rag/textSplitter.js";
import createVectorStore from "./services/rag/vectorStore.js";

const docs = await loadDocument("uploads/research.pdf");

const chunks = await splitDocuments(docs);
console.log(chunks[0].metadata);
const vectorStore = await createVectorStore(chunks);

console.log(vectorStore);