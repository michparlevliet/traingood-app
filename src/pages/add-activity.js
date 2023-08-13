import { useState } from 'react';
import styles from '@/styles/Form.module.css';
import Layout from '/components/Layout';

const AddActivity = () => {
  const [formData, setFormData] = useState({
    type: '',
    start_time: '',
    end_time: '',
    duration: '',
    calories_burned: '',
    steps: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/add-activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },  
        body: JSON.stringify(formData),
        });    
        if (response.status === 201) {
        console.log('Activity added successfully!');
        // You can redirect to a success page or update the UI accordingly
      }
    } catch (error) {
      console.error('Error adding activity:', error);
    }
  };

  return (
    <Layout>
    <div className="main">
      <div className={styles.container}>
      <h1>Add Activity</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" onChange={handleChange} />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="start_time">Start Time:</label>
          <input type="time" id="start_time" name="start_time" onChange={handleChange} />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="end_time">Finish Time:</label>
          <input type="time" id="end_time" name="end_time" onChange={handleChange} />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="calories_burned">Calories Burned:</label>
          <input type="number" id="calories_burned" name="calories_burned" onChange={handleChange} />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="steps">Steps:</label>
          <input type="number" id="steps" name="steps" onChange={handleChange} />
        </div>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange}></textarea>
        </div>
        <button className={styles.submitBtn} type="submit">Add Activity</button>
      </form>
      </div>
    </div>
    </Layout>
  );
};

export default AddActivity;
