import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

import { Home } from './pages/Home/index';
import { Chat } from './pages/Chat/chat';
import { Charts } from "./pages/Charts/chart";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat/:sala/:user" element={<Chat />} />
        <Route path="chart" element={<Charts />} />
      </Routes>
    </BrowserRouter>
  )
}
export { Rotas }