import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/register/', data);
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register('email')} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
