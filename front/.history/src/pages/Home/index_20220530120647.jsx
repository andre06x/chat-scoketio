import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

const Home = () => {
  const [sala, setSala] = useState("Selecione a sala");
  const [username, setUsername] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("teste", (data) => {
      console.log(data);
      document.getElementById("numero").innerHTML = data;
    });

    const get = async () => {
      const { data } = await axios.get("http://localhost:5000/teste");
      console.log(data);
    };

    get();

    return () => socket.disconnect();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="row m-5">
        <span id="numero" style={{ display: "none" }}></span>
        <select
          name="select_room"
          className="form-control"
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          id="select_room"
        >
          <option value="-1">Selecione a sala</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
          <option value="reactjs">ReactJS</option>
          <option value="elixir">Elixir</option>
        </select>
      </div>

      <div class="row">
        <label className="form-label">Digite seu usuário</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="username"
        />
      </div>

      <div class="row">
        <button
          type="submit"
          onClick={() => navigate(`/chat/${sala}/${username}`)}
          class="btn btn-primary mb-3"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export { Home };
