import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";;
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();

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
    <div class="container d-flex flex-column align-items-center">
      <div class="row m-5">
        <select name="select_room"className="form-control"  id="select_room">
          <option value="-1">Selecione a sala</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
          <option value="reactjs">ReactJS</option>
          <option value="elixir">Elixir</option>
        </select>
      </div>

      <div class="row">
        <label className="form-label">Digite seu usuário</label>
        <input type="text"className="form-control"  name="username" placeholder="username"/>
      </div>

      <div class="row">
        <button type="submit" onClick={() => navigate(`/chata/sala/123`)} class="btn btn-primary mb-3">Entrar</button>
      </div>

    </div>
  )
}

export { Home }