import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
