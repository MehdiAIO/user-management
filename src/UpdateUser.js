// UpdateUser.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../redux";

const UpdateUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const user = users.find((user) => user.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    country: user.country,
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const dispatch = useDispatch();

  const handleEmailValidation = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setFormIsValid(handleEmailValidation(value));
    }
  };

  const handleSubmit = () => {
    const updatedUser = {
      id: user.id,
      name: formData.name,
      email: formData.email,
      country: formData.country,
    };

    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="container">
      <form className="mx-auto w-75 bg-light rounded my-5">
        <h2 className="text-center pt-3">Update User</h2>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Name:</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="form-control w-50"
            placeholder="Type the full name"
            aria-describedby="helpId"
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Email:</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            className={`form-control w-50 ${formIsValid ? "" : "is-invalid"}`}
            placeholder="Type the email address"
            aria-describedby="helpId"
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex justify-content-between mx-3 py-3">
          <h3 className="form-label fw-light">Country:</h3>
          <select
            name="country"
            value={formData.country}
            className="form-control w-50"
            onChange={handleInputChange}
          >
            <option value="morocco">Morocco</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        <div className="d-flex justify-content-center gap-5 mx-3 py-3">
          <button type="button" className="btn btn-danger px-3">
            Reset
          </button>
          <button
            type="button"
            className="btn btn-primary px-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
