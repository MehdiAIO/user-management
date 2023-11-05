import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux"; 


const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const dispatch=useDispatch()

  const handleEmailValidation = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/;
    return regex.test(email); 
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setFormIsValid(handleEmailValidation(emailValue));
    setForm((formData) => ({ ...formData, email: emailValue })); 
  };

  const handleValue = (event) => {
    const { name, value } = event.target;
    setForm((formData) => ({ ...formData, [name]: value }));
    console.log(JSON.stringify(form));
  };

  const handleSubmit = () => {
    if (form.name !== "" && form.email !== "" && form.country !== "") {
      dispatch(setUser(form));
    }
  };
  

  return (
    <div className="container">
      <form className="mx-auto w-75 bg-light rounded my-5">
        <h2 className="text-center pt-3">Add User</h2>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Name:</h3>
          <input
            type="text"
            name="name"
            className="form-control w-50"
            placeholder="Type the full name"
            aria-describedby="helpId"
            onChange={handleValue}
          />
        </div>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Email:</h3>
          <input
            type="email"
            name="email"
            className={`form-control w-50 ${formIsValid ? "" : "is-invalid"}`}
            placeholder="Type the email address"
            aria-describedby="helpId"
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Country:</h3>
          <select
            name="country"
            className="form-control w-50"
            onChange={handleValue}
          >
            <option value="morocco">Morocco</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        <div className="d-flex justify-content-center gap-5 mx-3 py-3">
          <button type="button" className="btn btn-danger px-3">Reset</button>
          <button type="button" className="btn btn-primary px-5" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
