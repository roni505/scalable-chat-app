import { Server } from "socket.io";

class SocketServer {
    private _io: Server

    constructor() {
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*"
            }
        })
    }

    get io() {
        return this._io
    }
    
    /**
     * initListeners
     */
    public initListeners() {
        const io = this.io
        console.log("Init Socket Listeners...");
        io.on("connection", (socket) => {
            console.log("New socket connected", socket.id);
            // destructuring message :--- async ({message}: {message: string}) => 
            socket.on("event:message", async ({message}: {message: string}) => {
                console.log(`New message recieved ${message}`);   
            })
          });    }
}

export default SocketServer