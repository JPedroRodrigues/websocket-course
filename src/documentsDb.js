import { collectionDocuments } from "./DbConnect.js";

function findDocument(documentName) {
    const document = collectionDocuments.findOne({ name: documentName });

    return document;
}

function updateDocument(documentName, documentText) {
    const update = collectionDocuments.updateOne(
        { name: documentName }, 
        { $set: { text: documentText } }
    );

    return update;
}

function getDocuments() {
    const documents = collectionDocuments.find().toArray();
    return documents;
}

function addDocument(documentName) {
    const result = collectionDocuments.insertOne({ name: documentName, text: "" });
    return result;
}

function deleteDocument(documentName) {
    const result = collectionDocuments.deleteOne({ name: documentName });
    return result;
}

export { 
    findDocument,
    updateDocument,
    getDocuments,
    addDocument,
    deleteDocument
};