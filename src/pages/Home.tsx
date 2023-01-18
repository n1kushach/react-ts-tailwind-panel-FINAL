import React from "react";
import { useNavigate } from "react-router-dom";

interface Props{
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const Home = ({loggedIn, setLoggedIn} : Props) => {
  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
    setLoggedIn(false);
  };

  return (
    <div className="flex">
      home
      <button onClick={Logout}>Log Out</button>
    </div>
  );
};

export default Home;
