import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import LogIn from '../pages/LogIn';
import Devices from '../pages/Main';

function App() {
  



  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Devices" element={<Devices />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;