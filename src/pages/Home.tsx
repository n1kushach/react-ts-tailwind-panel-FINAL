import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';

export const Home = () => {

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <Navbar/>
      <button onClick={Logout}>Log Out</button>
    </div>
  )
}

export default Home