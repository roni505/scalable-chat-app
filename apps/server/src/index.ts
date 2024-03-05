import http from "http"
import SocketServer from "./services/socket"
import cors from "cors"

async function init() {
    const httpServer = http.createServer()
    const PORT = process.env.PORT ? process.env.PORT : 8080
    const socketServer = new SocketServer()

    socketServer.io.attach(httpServer)

    httpServer.listen(PORT, () => 
    console.log(`HTTP server started at PORT: ${PORT}`)
    )

    socketServer.initListeners()
}

init()