import moment from "moment";
import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

const Chat = () => {
  const { sala, user } = useParams();
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.emit(
      "select_room",
      {
        room: sala,
        username: user,
      },
      (response) => {
        console.log(response);
        response.forEach((message) => createMessage(message));
      }
    );

    socket.on("message", (data) => {
      console.log(data);
      createMessage(data);
    });

    const usernameDiv = document.getElementById("username");
    usernameDiv.innerHTML = `Ola ${user}! Você está na sala ${sala}`;

    return () => socket.disconnect();
  }, []);

  function createMessage(data) {
    const messageDiv = document.getElementById("messages");
    messageDiv.innerHTML += `
        <div className="new_message>
          <label className="form-label">
            <strong>${data.username}:</strong> <span>${data.text} - ${moment(
      data.createdAt
    ).format("DD/MM HH:mm")}</span>
          </label>
        </div>
    `;
  }

  const sendMessage = () => {
    const socket = socketIOClient(ENDPOINT);

    const data = {
      room: sala,
      message: mensagem,
      username: user,
    };

    socket.emit("message", data);
    console.log(data);
    setMensagem("");
  };

  return (
    <div className="container d-flex flex-column">
      <button onClick={() => navigate('/')} type="button" className="btn btn-danger" id="logout">
        Logout
      </button>
      <div id="username"></div>
      <hr />

      <div id="chat_content">
        <div className="messages m-3" id="messages"></div>
      </div>

      <input
        className="form-control"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        type="text"
        placeholder="Digite sua mensagem"
        id="message_input"
      />
      <button className="btn btn-primary" onClick={() => sendMessage()}>
        Enviar
      </button>
      <footer></footer>
    </div>
  );
};

export { Chat };