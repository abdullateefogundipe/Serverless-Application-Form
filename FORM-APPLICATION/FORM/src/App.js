import { useState } from "react";
import axios from 'axios';
import './App.css';
import FormInput from "./FormInput";

const App = ({ signOut }) => {
  const [values, setValues] = useState({
    Fullname: "",
    Email: "",
    Nationality: "",
    MaritalStatus: "",
    Occupation: "",
    Age: "",
  });

  const input = [
    {
      id: 1,
      name: "Fullname",
      type: "text",
      placeholder: "Fullname",
      label: "Fullname",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Your Email",
      label: "Email",
    },
    {
      id: 3,
      name: "Nationality",
      type: "text",
      placeholder: "Nationality",
      label: "Nationality",
    },
    {
      id: 4,
      name: "MaritalStatus",
      type: "text",
      placeholder: "Marital Status",
      label: "Marital Status",
    },
    {
      id: 5,
      name: "Occupation",
      type: "text",
      placeholder: "Occupation",
      label: "Occupation",
    },
    {
      id: 6,
      name: "Age",
      type: "number",
      placeholder: "Age",
      label: "Age",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { Fullname, Email, Nationality, MaritalStatus, Occupation, Age } = values;

    await axios.post(
      'https://5kzktzbp23.execute-api.us-east-2.amazonaws.com/default/ServerlessApplication-Form',
      {
        Fullname,
        Email,
        Nationality,
        MaritalStatus,
        Occupation,
        Age,
      }
    );
    window.location.reload();
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        {input.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={onChange}
            />
          </div>
        ))}
        <button onClick={signOut}>Submit & Sign out</button>
      </form>
    </div>
  );
};

export default App;
