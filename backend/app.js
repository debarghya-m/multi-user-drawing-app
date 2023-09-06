const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hey Socket.io</h1>");
});

io.on("connection", (socket) => {
  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
  socket.on("join-room", (data) => {
    console.log("userName", data.userName);
    socket.broadcast.emit("new-user", data);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
