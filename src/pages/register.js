import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Registration successful!');
      } else {
        const data = await response.json();
        console.log('Error registering:', data.message);
      }
    } 
    catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="f_name">First Name:</label>
          <input type="text" id="f_name" name="f_name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="l_name">Last Name:</label>
          <input type="text" id="l_name" name="l_name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
