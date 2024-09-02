import { emitEditorText } from "./socket-front-document.js"

export function updateEditorText(text) {
    editorText.value = text
}

const editorText = document.getElementById("editor-texto");

editorText.addEventListener("keyup", () => {
    // console.log(editorText.value);
    emitEditorText(editorText.value)
});

export default { updateEditorText }