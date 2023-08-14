import { useEffect, useState } from 'react';
import Layout from '/components/Layout';
import axios from 'axios';

const ViewActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    // axios.get('/api/myendpoint')
    // .then(response => {
    // // handle the response data
    // console.log(response.data);
    // })
    // .catch(error => {
    // // handle the error
    // console.log(error);
    // });
      axios.get('https://traingood-693615ea8b7d.herokuapp.com/api/view-activities')
      .then(response => {
        const data = response.json();
        setActivities(data.activities);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching activities:', error)
      });
    };
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Acess-Control-Allow-Origin': '*'
  //       }
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setActivities(data.activities);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching activities:', error);
  //   }
  // };

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
