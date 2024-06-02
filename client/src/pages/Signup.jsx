// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profilePicture: '',
    terms: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/posts');
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Signup</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="flex flex-col space-y-4">
          <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-2 border rounded-lg" />
          <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" />
          <input name="profilePicture" type="url" placeholder="Profile Picture URL" value={formData.profilePicture} onChange={handleChange} className="w-full p-2 border rounded-lg" />
          <label className="flex items-center mt-4">
            <input name="terms" type="checkbox" checked={formData.terms} onChange={handleChange} required className="mr-2" />
            I agree to the terms and conditions
          </label>
          <button type="submit" className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
