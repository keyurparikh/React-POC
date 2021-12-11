import React, { useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    const sayHello = async () => {
      const response = await fetch("/api/hello");
      const body = await response.json();
      console.log(body);
    };
    sayHello();
  }, []);

  const submitConsent = async (e: React.MouseEvent) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "https://api.notifications.service.gov.uk/v2/notifications/email",
      data: {
        email_address: "keyur.parikh@digital.mod.uk",
        template_id: "8e449ecc-c723-4d71-bde9-c91101646044",
        personalisation: {
          feedback: "Test",
        },
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0NDJkNjQ2NC1mYzQ0LTRkODgtODY5MC1jM2Q1YjAzYTc2ZDkiLCJpYXQiOjE2MzkwODM3NzN9.5ddVBKxh38OXKdf8TahkT7bE7tafCw-3N_lCzVogzfw",
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button type="submit" onClick={submitConsent}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
