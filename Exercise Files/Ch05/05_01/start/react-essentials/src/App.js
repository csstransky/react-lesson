import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/eveporcello

function App({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData)
    }, []);

  return (
    <>
        {JSON.stringify(data)}
    </>
  );
}

export default App;
