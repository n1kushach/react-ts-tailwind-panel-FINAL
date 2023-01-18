import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  formData: any,
  setFormData: any
}

export const AddForm = (props: Props) => {
  const location = useLocation();
  const data = location;

  const [organization, setOrganization] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [employmentType, setEmploymentType] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [proficiency, setProficiency] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      id: props.formData.length === 0 ? 1 : props.formData[props.formData.length - 1].id + 1,
      organization: organization,
      title: title,
      firstName: firstName,
      lastName: lastName,
      languages: languages,
      employmentType: employmentType,
      profession: profession,
      proficiency: proficiency,
    };
    props.setFormData([...props.formData, data]); 
    console.log(data);
    
    navigate("/home");
  };

  const navigateToHome = () => {
    navigate("/home");
  }
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto mt-5">
        <h1 className="text-2xl">About you</h1>
        <div className="top flex mt-16 gap-8">
          <div>
            <h2 className="text-xl font-bold">Personal info</h2>
            <p className="text-sm font-extralight">
              Provide your personal info
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOrganization(e.target.value)
                }
                className="w-full bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                placeholder="Organization"
              ></input>
            </div>
            <div className="flex gap-3">
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTitle(e.target.value)
                }
                className="bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              >
                <option value="Title">Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
              </select>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                className="bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                placeholder="First name"
              ></input>

              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                className="bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                placeholder="Last name"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-16"></hr>

      <div className="bottom w-3/4 mx-auto mt-16">
        <div>
          <h2 className="text-xl font-bold">Professional info</h2>
          <p className="text-sm font-extralight">
            Provide your professional info
          </p>
        </div>
        <div className="mt-14">
          <div className="flex flex-col gap-8 items-center">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLanguages(e.target.value)
              }
              className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              placeholder="Language(s) separate with comma"
            ></input>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmploymentType(e.target.value)
              }
              className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              placeholder="Type of employment"
            ></input>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProfession(e.target.value)
              }
              className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              placeholder="Profession"
            ></input>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProficiency(e.target.value)
              }
              className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              placeholder="Proficiency level"
            ></input>
            <input
              onChange={(e: any) => console.log(e.target.files[0]["name"])}
              className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
              type="file"
            ></input>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-end mt-7 gap-2">
        <button onClick={() => navigateToHome()} className="bg-sky-500 p-2 text-white rounded-md">Close</button>
        <button
          onClick={() => handleSubmit()}
          className="bg-sky-800 p-2 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddForm;
