import React, { useState, useEffect } from "react";
import "./App.css";

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData);
  }, []);

    console.log(data)
  if (data) {
    return (
        <div>
          <h1>{data.name}</h1>
          <p>{data.location}</p>
            <img alt={data.login} src={data.avatar_url}/>
        </div>
    );
  }

  return <div>No Data Available</div>;
}

export default App;
