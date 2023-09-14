import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import LogIn from '../pages/LogIn';

function App() {
  



  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;