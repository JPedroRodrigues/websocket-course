import { emitEditorText, selectDocument } from "./socket-front-document.js"

export function updateEditorText(text) {
    editorText.value = text
}

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const documentTitle = document.getElementById("titulo-documento");
const editorText = document.getElementById("editor-texto");

documentTitle.textContent = documentName || "Documento sem título";

selectDocument(documentName);

editorText.addEventListener("keyup", () => {
    // console.log(editorText.value);
    emitEditorText({"documentText": editorText.value, "documentName": documentName})
});

export default { updateEditorText }