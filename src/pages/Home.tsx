import React from "react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex">
      home
      {/* <button onClick={Logout}>Log Out</button> */}
    </div>
  );
};

export default Home;
