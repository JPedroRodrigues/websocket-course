import express from "express";
import url from "url";
import path from "path";
import http from "http"
import { Server } from "socket.io"

function portLog(port) {
    console.log(`Server running at port ${port}`)
}

const app = express();
const port = process.env.port || 5000;

const currentPath = url.fileURLToPath(import.meta.url)
const publicDir = path.join(currentPath, "../..", "public");
app.use(express.static(publicDir));

const httpServer = http.createServer(app);
httpServer.listen(port, portLog(port));

const io = new Server(httpServer);

export default io;
