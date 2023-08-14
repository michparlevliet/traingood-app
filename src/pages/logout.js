// logout.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear any user session or token from local storage or cookies
    // For example:
    localStorage.removeItem('jwtToken');

    // Redirect to the home page after logout
    router.push('/');
  }, []);

  return (
    <div>
      <h1>Logging Out...</h1>
      {/* You can add a loading spinner or message here */}
    </div>
  );
};

export default Logout;
