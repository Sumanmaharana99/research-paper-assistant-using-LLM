
import embeddings from "./services/rag/embeddingService.js";

const vector = await embeddings.embedQuery(
    "What is Federated Learning?"
);

console.log("Vector Length:", vector.length);

console.log(vector.slice(0, 10));