import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/login/', data);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
