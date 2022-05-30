import React from 'react';

const Home = () => {
  return (
    <form action="chat.html">
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
  </form> 
  )
}

export { Home }