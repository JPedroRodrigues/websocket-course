import { updateEditorText } from "./document.js"

const socket = io();

export function emitEditorText(text) {
    socket.emit("editor-text", text);
}

socket.on("client-editor-text", (text) => {
    updateEditorText(text)
});

export default { emitEditorText };