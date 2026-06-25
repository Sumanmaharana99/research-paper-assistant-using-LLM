import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const splitDocuments = async(documents)=>{
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize:1000,
        chunkOverlap:200,
    })
    const chunks = await textSplitter.splitDocuments(documents);
    return chunks;
};
export default splitDocuments;