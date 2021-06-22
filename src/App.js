import "./App.css";
import Form from "./components/Form/Form";
import CardList from "./components/CardList/CardList";
import React, { useState } from "react";

function App() {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = (profile) => setProfiles([...profiles, profile]);

  return (
    <div className="App">
      <header className="App-header">
        <Form addNewProfile={addNewProfile} />
        <CardList profiles={profiles}/>
      </header>
    </div>
  );
}

export default App;
