import React from "react";

export const SingleElement = (props: any) => {
  return (
    <div className="flex justify-around w-3/4 mx-auto mt-5 bg-slate-200 p-2 rounded-md text-black">
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <p>{props.organization}</p>
      <button className=" bg-sky-700 text-white px-2">Edit</button>
      <button className=" bg-sky-700 text-white px-2">Delete</button>
    </div>
  );
};

export default SingleElement;
