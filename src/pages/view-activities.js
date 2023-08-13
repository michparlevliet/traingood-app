import { useEffect, useState } from 'react';
import Layout from '/components/Layout';

const ViewActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('/api/view-activities');
      if (response.ok) {
        const data = await response.json();
        setActivities(data.activities);
      }
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  return (
    <Layout>
    <div className="main">
      <h1>View Activities</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.activity_id}>
            <strong>Type:</strong> {activity.type}
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default ViewActivities;
