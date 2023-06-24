// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import React, { useState, useEffect } from "react";
import "@/styles//globals.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App