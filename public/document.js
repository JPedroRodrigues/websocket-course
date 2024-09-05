import { emitDeleteDocument, emitEditorText, selectDocument } from "./socket-front-document.js"

export function updateEditorText(text) {
    editorText.value = text
}

export function alertAndRedirect(documentName) {
    alert(`${documentName} document successfully deleted`);
    window.location.href = "/";
}

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const documentTitle = document.getElementById("titulo-documento");
const editorText = document.getElementById("editor-texto");
const deleteButton = document.getElementById("excluir-documento");

documentTitle.textContent = documentName || "Documento sem título";

selectDocument(documentName);

deleteButton.addEventListener("click", () => {
   emitDeleteDocument(documentName); 
});

editorText.addEventListener("keyup", () => {
    // console.log(editorText.value);
    emitEditorText({"documentText": editorText.value, "documentName": documentName})
});

export default { updateEditorText, alertAndRedirect }