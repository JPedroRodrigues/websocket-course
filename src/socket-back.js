import io from "./server.js"

io.on("connection", (socket) => {
    console.log(`A client has connected. Client ID: ${socket.id}`);

    socket.on("editor-text", (text) => {
        // send to every single client including its own
        // io.emit("client-editor-text", text)

        socket.broadcast.emit("client-editor-text", text)
    });

    socket.on("disconnect", (cause) => {
        console.log(`Client of ID ${socket.id} has disconnected.\nCause: ${cause}`);
    });
});