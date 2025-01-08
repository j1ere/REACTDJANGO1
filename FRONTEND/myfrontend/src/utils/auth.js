import axios from 'axios';
import Cookies from 'js-cookie';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/accounts/login/', { email, password });
    const { token } = response.data;
    Cookies.set('jwtToken', token, { expires: 7 }); // Store token as a cookie (expires in 7 days)
    console.log('Login successful!');
    return token; // Return token if needed
  } catch (error) {
    console.error('Login failed:', error);
    throw error; // Rethrow error for handling in the calling component
  }
};
