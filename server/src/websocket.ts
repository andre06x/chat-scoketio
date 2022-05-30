import { io } from "./http";

interface RoomUser {
  socket_id: string;
  username: string;
  room: string;
}

interface Message {
  room: string;
  text: string;
  createdAt: Date;
  username: string;
}

const users: RoomUser[] = [];

const messages: Message[] = [];

//io manda para todos
//socket para um especifico

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("select_room", (data, callback) => {
    console.log(data);

    //joga o usuario para outra sala
    socket.join(data.room);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.room
    );
    if (userInRoom) {
      userInRoom.socket_id = socket.id;
    } else {
      users.push({
        room: data.room,
        username: data.username,
        socket_id: socket.id,
      });
    }
    console.log(users);

    const messagesRoom = getMessagesRoom(data.room);
    callback(messagesRoom);
  });

  socket.on("message", (data) => {
    console.log(data);
    const message: Message = {
      room: data.room,
      username: data.username,
      text: data.message,
      createdAt: new Date(),
    };

    messages.push(message);

    io.to(data.room).emit("message", message);
    console.log(message);
  });

  //enviar para usuarios da saça

  //teste
  setInterval(() => {
    let val = Math.floor(Math.random() * (300 - 150)) + 150;
    socket.emit("teste", val);
  }, 1000);
});

function getMessagesRoom(room: string) {
  const messagesRoom = messages.filter((message) => message.room === room);
  return messagesRoom;
}
