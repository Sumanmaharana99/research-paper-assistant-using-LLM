import { Chroma } from "@langchain/community/vectorstores/chroma";
import embeddings from "./embeddingService.js";
import { Document } from "@langchain/core/documents";

const createVectorStore = async (chunks) => {

    const cleanedChunks = chunks.map(chunk => {

        return new Document({

            pageContent: chunk.pageContent,

            metadata: {
                source: chunk.metadata.source,
                page: chunk.metadata.loc.pageNumber,
                totalPages: chunk.metadata.pdf.totalPages

            }

        });

    });

    return await Chroma.fromDocuments(
        cleanedChunks,
        embeddings,
        {
            collectionName: "research-papers",
            url: "http://localhost:8000"
        }
    );

};

export default createVectorStore;