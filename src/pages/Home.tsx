import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SingleElement } from "../components/SingleElement/SingleElement";

interface Props {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  formData: any,
  setFormData: any
}

export const Home = ({ loggedIn, setLoggedIn, formData, setFormData }: Props) => {

  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
    setLoggedIn(false);
  };

  return (
    <div className="flex w-full flex-col h-screen ">
      <div className="flex flex-col items-center">
        {formData.map((item: any, index: any) => {
          return (
            <SingleElement
              formData={formData}
              setFormData={setFormData}
              index={index}
              state={item}
              firstName={item.firstName}
              lastName={item.lastName}
              organization={item.organization}
            />
          );
        })}
        <div className="flex flex-row gap-5 mt-10">
          <Link to="/home/addform" state={formData}>
            <button className="bg-sky-700 text-white px-2">Add New</button>
          </Link>
          <button className="bg-red-500 text-white px-2" onClick={Logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
