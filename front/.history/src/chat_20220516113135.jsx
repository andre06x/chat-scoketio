import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const Chat = () => {
  const { sala, user } = useParams();
  const [mensagem, setMensagem] = useState('');
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("select_room", {
      user,
      sala,
  }, response => {
      console.log(response)
      response.forEach(message => createMessage(message))
  })

  document
.getElementById("message_input")
.addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        

        const data = {
            room: sala,
            message: mensagem,
            username: user
        }

        socket.emit("message", data);
        setMensagem('')
    }
})

socket.on("message", (data) => {
  createMessage(data);
})

return () => socket.disconnect();


  }, [])
  
  function createMessage(data){
    const messageDiv = document.getElementById("messages");
    messageDiv.innerHTML += `
        <div class="new_message>
          <label class="form-label">
            <strong>${data.username}</strong> <span>${data.text} - ${dayjs(data.createdAt).format("DD/MM HH:mm")}</span>
          </label>
        </div>
    `
}

  return (
    <div class="container">
      <div class="row">
        <button type="button" class="logout" id="logout">Logout</button>
        <div id="username"></div>
        <hr />

        <div id="chat_content">

          <div class="messages" id="messages">

          </div>

        </div>

        <input class="form-control" value={mensagem} onChange={(e) => setMensagem(e.target.value)} type="text" placeholder="Digite sua mensagem" id="message_input" />
        <footer>
        </footer>

      </div>
    </div>
  )
}

export { Chat }