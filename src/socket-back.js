import io from "./server.js"

io.on("connection", (socket) => {
    console.log(`A client has connected. Client ID: ${socket.id}`);

    socket.on("select-document", (documentName) => {
        // Place client connections into the same room
        socket.join(documentName);
    });

    socket.on("editor-text", (textData) => {
        // send to every single client including its own
        // io.emit("client-editor-text", text)

        // Since I want to limit the broadcasting to not generate text conflicts between document pages, I will limit the emission
        //socket.broadcast.emit("client-editor-text", text)

        // Also, a server can emit to every single connection instance and both server and socket can emit to more than one room
        // (socket|io).to(nomeDocumento).to("JavaScript").emit("texto_editor_clientes", texto);

        // You can use an array
        // (socket|io).to([nomeDocumento, "JavaScript"]).emit("texto_editor_clientes", texto);

        // Alternatively, you can emit to a connection which is in rooms 1 and 2 but not in 3
        // Of course, except can be used with more than one emit type
        // io.to(["room1", "room2"]).except("room3").emit("event-name");
        // io.except("sala_excluida").emit("nome_do_evento");
        // socket.broadcast.except(["sala_excluida_1", "sala_excluida_2"]).emit("nome_do_evento");

        socket.to(textData["documentName"]).emit("client-editor-text", textData["documentText"]);
    });

    socket.on("disconnect", (cause) => {
        console.log(`Client of ID ${socket.id} has disconnected.\nCause: ${cause}`);
    });
});