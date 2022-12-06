import React, { useState } from "react";

const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{ errors.username && errors.username }</p>

        <label htmlFor="passWord">Password</label>
        <input
          id="passWord"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{ errors.password && errors.password }</p>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export function validate(input) {
  const errors = {};

  const regexEmail = /\S+@\S+\.\S+/;
  const regexPass = new RegExp(
    "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
  );

  if (!regexEmail.test(input.username)) {
    errors.username = "Username must be a valid Email addres";
  }
  if (!input.username) {
    errors.username = "Username is required";
  }
  if (input.username.length > 35) {
    errors.username = "Max length 35";
  }
  if (!input.password) {
    errors.password = "Password is required";
  }
  if (!regexPass.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default Form;
