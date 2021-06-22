import React, { useState } from "react";
import axios from 'axios'

export default function Form({addNewProfile}) {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (e) => {
      e.preventDefault()
      const {data} = await axios.get(`https://api.github.com/users/${userName}`)
      addNewProfile(data)
      setUserName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        placeholder="Github username"
        onChange={(e)=>setUserName(e.target.value)}
        required
      />
      <button>Add Card</button>
    </form>
  );
}
