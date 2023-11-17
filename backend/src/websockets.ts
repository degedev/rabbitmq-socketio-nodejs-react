import { io } from ".";

io.on("connection", socket => {
  console.log("User connected:", socket.id);
});