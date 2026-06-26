import loadDocument from "./services/rag/documentLoader.js";
import splitDocuments from "./services/rag/textSplitter.js";
import createVectorStore from "./services/rag/vectorStore.js";

const docs = await loadDocument("uploads/research.pdf");
const chunks = await splitDocuments(docs);

const vectorStore = await createVectorStore(chunks);

const retriever = vectorStore.asRetriever({
    k: 3,
});

const question = "What is Federated Learning?";

const results = await retriever.invoke(question);

console.log(results);