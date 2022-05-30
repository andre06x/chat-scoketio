import React, { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const Chat = () => {
  const { sala, user } = useParams();
  console.log(sala, user)
  useEffect(() => {

  }, [])
  
  return (
    <div class="container">
      <div class="row">
        <button type="button" class="logout" id="logout">Logout</button>
        <div id="username"></div>
        <hr />

        <div id="chat_content">

          <div class="messages" id="messages"></div>

        </div>

        <input class="form-control" type="text" placeholder="Digite sua mensagem" id="message_input" />
        <footer>
        </footer>

      </div>
    </div>
  )
}

export { Chat }