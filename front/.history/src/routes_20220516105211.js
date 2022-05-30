import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="chat/:sala/:user" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export { Routes }