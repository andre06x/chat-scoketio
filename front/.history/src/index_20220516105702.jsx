import React from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";;
import axios from 'axios';
const Home = () => {

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("teste", data => {
      console.log(data)
    });

    const get = async  () => {
      const { data } = await axios.get("http://localhost:5000/teste");
      console.log(data)
    }

    get();
  }, []);

  return (
    <div class="container">
      <div class="row">
        <select name="select_room" id="select_room">
          <option value="-1">Selecione a sala</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
          <option value="reactjs">ReactJS</option>
          <option value="elixir">Elixir</option>
        </select>
      </div>

      <div class="row">
        <label class="form-label">Digite seu usuário</label>
        <input type="text" name="username" placeholder="username"/>
      </div>

      <div class="row">
        <button type="submit" class="btn btn-primary mb-3">Entrar</button>
      </div>

    </div>
  )
}

export { Home }