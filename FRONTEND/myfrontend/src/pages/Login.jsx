import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for token handling

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        data
      );
      const { token } = response.data; // Assuming the token is returned on successful login
      //   Cookies.set("jwtToken", token, { expires: 7 }); // Store the token as a cookie (valid for 7 days)
      Cookies.set("jwtToken", token, {
        expires: 7, // Valid for 7 days
        sameSite: "Lax", // Adjust to 'Strict' or 'None' based on your app's needs
        secure: true, // Use true for HTTPS environments
      });
      console.log("Token stored:", Cookies.get("jwtToken"));

      alert("Login successful!");
      navigate("/wordcount"); // Redirect to WordCount page
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { login } from '../utils/auth';

// const Login = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/accounts/login/', data);
//       alert('Login successful!');
//     } catch (error) {
//       console.error(error);
//       alert('Login failed!');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Username:</label>
//           <input type="text" {...register('username', { required: true })} />
//           {errors.username && <span>This field is required</span>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" {...register('password', { required: true })} />
//           {errors.password && <span>This field is required</span>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
