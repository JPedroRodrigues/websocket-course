import { emitAddDocument } from "./socket-front-index.js";

const documentsList = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const documentInput = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitAddDocument(documentInput.value);
    documentInput.value = "";
});

function insertDocumentLink(documentName) {
    documentsList.innerHTML += `
        <a href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action" id="${documentName}-document">
        ${documentName}
        </a>
    `;
}

function removeDocumentLink(documentName) {
    const doc = document.getElementById(`${documentName}-document`);
    documentsList.removeChild(doc);
}

export { insertDocumentLink, removeDocumentLink };