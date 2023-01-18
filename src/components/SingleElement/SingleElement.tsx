import React from "react";
import { Link } from "react-router-dom";

export const SingleElement = (props: any) => {

  const handleDelete = (id: number) => {
    const filteredData = props.formData.filter((item: any) => item.id !== id);
    props.setFormData(filteredData);
  }

  return (
    <div key={props.index} className="flex items-center w-1/4 lg:max-h-24 justify-around lg:w-3/4 mx-auto mt-5 bg-slate-200 p-2 rounded-md text-black">
      <div className="flex flex-row gap-4">
        <h1>{props.firstName}</h1>
        <h1>{props.lastName}</h1>
        <p>{props.organization}</p>
      </div>
      <div className="flex flex-row gap-5">
        <Link to={`/home/editform/${props.state.id}`} state={props.state}>
          <button className=" bg-sky-700 text-white px-2">Edit</button>
        </Link>
        <button onClick={() => handleDelete(props.state.id)} className=" bg-sky-700 text-white px-2">Delete</button>
      </div>
    </div>
  );
};

export default SingleElement;
