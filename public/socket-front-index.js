import { insertDocumentLink, removeDocumentLink } from "./index.js";

const socket = io();

function emitAddDocument(documentName) {
    socket.emit("post-document", documentName);
};

socket.emit("get-documents", (documents) => {
    documents.forEach(document => {
        insertDocumentLink(document.name);
    });
});

socket.on("post-document-interface", (documentName) => {
    insertDocumentLink(documentName);
});

socket.on("document-exists", (documentName) => {
    alert(`The ${documentName} document already exists!`);
});

socket.on("delete-document-success", (documentName) => {
    removeDocumentLink(documentName);
});

export { emitAddDocument };