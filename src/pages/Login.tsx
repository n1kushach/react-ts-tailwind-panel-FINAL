import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const email = useRef<any>("");
  const password = useRef<any>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("password", "12345");
      navigate("/home");
    } else {
      alert("Invalid Credentials")
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 w-full">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col justify-center items-center gap-8 bg-slate-200 p-8 rounded-lg">
          <div>
            <input
              className="border placeholder:text-xs p-3 rounded-md"
              type="text"
              ref={email}
              placeholder="Enter username"
            ></input>
          </div>
          <div>
            <input
              className="border placeholder:text-xs p-3 rounded-md"
              type="password"
              ref={password}
              placeholder="Enter password"
            ></input>
          </div>

          <button className="uppercase bg-sky-800 text-white px-3 py-1 rounded-md text-xs">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
