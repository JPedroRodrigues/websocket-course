import { alertAndRedirect, updateEditorText } from "./document.js"

const socket = io();

export function emitEditorText(textData) {
    socket.emit("editor-text", textData);
}

export function selectDocument(documentName) {
    socket.emit("select-document", documentName, (text) => {
        updateEditorText(text);
    });
}

export function emitDeleteDocument(documentName) {
    socket.emit("delete-document", documentName);
}

socket.on("client-editor-text", (text) => {
    updateEditorText(text);
});

socket.on("delete-document-success", (documentName) => {
    alertAndRedirect(documentName);
});

socket.on("delete-document-failed", (documentName) => {
    alert(`Error while deleting the document ${documentName}!`);
});

export default { emitEditorText, selectDocument, emitDeleteDocument };