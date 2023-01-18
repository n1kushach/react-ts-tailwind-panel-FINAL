import React from "react";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

interface Props {
  formData: any;
  setFormData: any;
}

export const EditForm = (props: Props) => {
  const params = useParams();
  const location = useLocation();
  const id = Number(params.id);
  const navigate = useNavigate();

  const data = props.formData.filter((item: any) => item.id === id);
  const {
    organization,
    title,
    firstName,
    lastName,
    languages,
    employmentType,
    profession,
    proficiency,
  } = data[0];

  const [editOrganization, setEditOrganization] = useState<string>("");
  const [editTitle, setEditTitle] = useState<string>("");
  const [editFirstName, setEditFirstName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [editLanguages, setEditLanguages] = useState<string>("");
  const [editEmploymentType, setEditEmploymentType] = useState<string>("");
  const [editProfession, setEditProfession] = useState<string>("");
  const [editProficiency, setEditProficiency] = useState<string>("");

  const handleEditClose = () => {
    navigate("/home");
  };

  const handleEditSubmit = () => {
    const data = {
      id: id,
      organization: editOrganization,
      title: editTitle,
      firstName: editFirstName,
      lastName: editLastName,
      languages: editLanguages,
      employmentType: editEmploymentType,
      profession: editProfession,
      proficiency: editProficiency,
    };
    props.setFormData(
      [...props.formData].map((object) => {
        if (object.id == id) {
          return data;
        } else return object;
      })
    );
    navigate("/home");
  };

  return (
    <div className="w-full overflow-scroll">
      <div className="w-full">
        <div className="w-full">
          <div className="w-3/4 mx-auto mt-5">
            <h1 className="text-2xl"></h1>
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
                      setEditOrganization(e.target.value)
                    }
                    defaultValue={organization}
                    className="w-full bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                    placeholder="Organization"
                  ></input>
                </div>
                <div className="flex gap-3">
                  <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setEditTitle(e.target.value);
                    }}
                    className="bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                  >
                    <option value={title}>Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                  </select>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditFirstName(e.target.value)
                    }
                    defaultValue={firstName}
                    className="bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                    placeholder="First name"
                  ></input>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditLastName(e.target.value)
                    }
                    defaultValue={lastName}
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
                    setEditLanguages(e.target.value)
                  }
                  defaultValue={languages}
                  className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                  placeholder="Language(s) separate with comma"
                ></input>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditEmploymentType(e.target.value)
                  }
                  defaultValue={employmentType}
                  className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                  placeholder="Type of employment"
                ></input>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditProfession(e.target.value)
                  }
                  defaultValue={profession}
                  className="w-3/4 bg-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-black"
                  placeholder="Profession"
                ></input>
                <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditProfession(e.target.value)
                  }
                  defaultValue={proficiency}
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
            <button
              onClick={() => handleEditClose()}
              className="bg-sky-500 p-2 text-white rounded-md"
            >
              Close
            </button>
            <button
              onClick={() => handleEditSubmit()}
              className="bg-sky-800 p-2 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
