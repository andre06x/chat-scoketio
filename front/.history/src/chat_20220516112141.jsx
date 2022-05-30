import React, { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const Chat = () => {
  const { sala, user } = useParams();
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("teste", data => {
      console.log(data)
    });

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

        <input class="form-control" type="text" placeholder="Digite sua mensagem" id="message_input" />
        <footer>
        </footer>

      </div>
    </div>
  )
}

export { Chat }