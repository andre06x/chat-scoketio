import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

import { Home } from './index';
import { Chat } from './chat';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat/:sala/:user" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}
export { Rotas }