import loadDocument from "./services/rag/documentLoader.js";
import splitDocuments from "./services/rag/textSplitter.js";

const docs = await loadDocument("uploads/research.pdf");

console.log("Original Documents:", docs.length);

const chunks = await splitDocuments(docs);

console.log("Chunks:", chunks.length);

console.log(chunks[0]);