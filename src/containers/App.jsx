import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import LogIn from '../pages/LogIn';
import Main from '../pages/Main';

import UserContext from '../contexts/UserContext.js';

function App() {
  const [User, setUser] = useState({
    isDropdownVisible:false,
  }); 

  return (
    <UserContext.Provider value={{ User, setUser }}>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
