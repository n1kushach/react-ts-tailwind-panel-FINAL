import "./App.css";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { EditForm } from "./pages/EditForm";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from "./pages/AddForm";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { Navbar } from "./components/Navbar/Navbar";


function App() {

  const [loggedIn, setLoggedIn] = useState<boolean>(sessionStorage.getItem("emailData")==='1' && sessionStorage.getItem("password")==='1' ? true : false)

  return (
    <div className="flex flex-col lg:flex-row">
      <Router>
        {loggedIn && <Navbar /> }
        <Routes>
          <Route index element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="home" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="home/editform" element={<EditForm />} />
          <Route path="home/addform" element={<AddForm />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
