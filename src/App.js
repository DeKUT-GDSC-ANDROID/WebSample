import { useState } from "react";
import Users from "./Users";
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import UserDetails from "./UserDetails";
import './index.css';

export function Introduction() {
  return (
    <h1>We are Adalab</h1>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      
    <Routes>
    <Route path='/' element={
      <>
 {!isLoggedIn ? <Login onLoginSuccess={handleLoginSuccess} /> : <Users />}
  </>
    } />
    <Route path="/user/:id" element={
          <>
           <UserDetails />
          </>} />

    </Routes>

    </div>
  );
}

export default App;
