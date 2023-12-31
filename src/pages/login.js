import React, { useState } from 'react';
import styles from "@/styles/Form.module.css";
import Layout from '/components/Layout';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch('https://traingood-693615ea8b7d.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful!');
        console.log('JWT Token:', data.token);
      } else {
        const data = await response.json();
        console.log('Error logging in:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Layout>
    <div className="main">
      <div className={styles.container}>
      <h1 className={styles.title}>Login Page</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} />
        </div>
        <button className={styles.submitBtn} type="submit">Login</button>
      </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
