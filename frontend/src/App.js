import React, { useEffect, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  

  return (
    <>
    <main>
      <h1 className="title">CRUD Operations</h1>

      <div className="input_holder">
        <input
          style={{borderRadius:"5px", border:"solid black 1px"}}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your task"
        />

       
      </div>

      
    </main>
    </>
  );
};

export default App;