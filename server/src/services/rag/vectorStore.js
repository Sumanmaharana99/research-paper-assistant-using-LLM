import { Chroma } from "@langchain/community/vectorstores/chroma";
import { Document } from "@langchain/core/documents";
import embeddings from "./embeddingService.js";

const COLLECTION_NAME = "research-papers";
const CHROMA_URL = "http://localhost:8000";

export const createVectorStore = async (chunks) => {

    const cleanedChunks = chunks.map(chunk =>
        new Document({
            pageContent: chunk.pageContent,
            metadata: {
                source: chunk.metadata.source,
                page: chunk.metadata.loc.pageNumber,
                totalPages: chunk.metadata.pdf.totalPages
            }
        })
    );

    const vectorStore = new Chroma(embeddings, {
        collectionName: COLLECTION_NAME,
        url: CHROMA_URL
    });

    await vectorStore.addDocuments(cleanedChunks);

    return vectorStore;
};

export const getVectorStore = () => {

    return new Chroma(embeddings, {
        collectionName: COLLECTION_NAME,
        url: CHROMA_URL
    });

};