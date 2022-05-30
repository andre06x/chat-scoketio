import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

import { Home } from './index';
import { Chat } from './chat';
import { Chart, Charts } from "./chart";

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