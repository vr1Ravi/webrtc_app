import { createServer } from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Message:", msg);
    io.emit("message", msg);
  });
});

app.get("/", (req, res) => res.send("Hello server is up"));

httpServer.listen(3000, () => {
  console.log("Socket.IO server running on port 3000");
});
