'use client'

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client"
import { TextField, Button } from "@mui/material";

export default function Page(): JSX.Element {

  const[ input, setInput] = useState<string>('');
  const[ socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const _socket = io("http://localhost:8080")
    setSocket(_socket)

    // cleanup mechanism in the useEffect hook.
    return () => {
      _socket.disconnect();
    }
  }, [])

  function sendMessage() {
    console.log("on click is working");
    socket?.emit("event:message", input?.toString())
  }

  return (
    <div>
      <h1>This is the message</h1>
      <div style={{
        display:"flex"
      }}>
      <TextField id="outlined-basic" label="Enter your message" variant="outlined" 
       onChange={e => setInput(e.target.value)}
       />
      </div>
      <Button 
       variant="contained"
       onClick={sendMessage}
       > 
       Send 
       </Button>
    </div>
  );
}
