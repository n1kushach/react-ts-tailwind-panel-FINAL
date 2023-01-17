import "./App.css";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { EditForm } from "./pages/EditForm";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from "./pages/AddForm";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
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
