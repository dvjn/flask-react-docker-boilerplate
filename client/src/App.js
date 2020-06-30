import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./api";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = useCallback((event) => setValue(event.target.value), []);
  const handleSubmit = useCallback(() => {
    fetch(`${api.API_URL}?name=${value}`)
      .then((res) => res.json())
      .then((res) => setResult(res.msg));
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
          <input type="text" value={value} onChange={handleChange} />
          <input type="button" onClick={handleSubmit} value="Send" />
        </label>
        {result && (
          <p>
            Result: <span>{result}</span>
          </p>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
