import { updateEditorText } from "./document.js"

const socket = io();

export function emitEditorText(textData) {
    socket.emit("editor-text", textData);
}

export function selectDocument(name) {
    socket.emit("select-document", name);
}

socket.on("client-editor-text", (text) => {
    updateEditorText(text)
});

export default { emitEditorText, selectDocument };