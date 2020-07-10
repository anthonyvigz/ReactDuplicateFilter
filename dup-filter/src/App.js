import React, { useState, useEffect } from "react";
import csvfile from "./testFiles/normal.csv";

function App() {
  // State declaration for the current CSV file
  const [file, setFile] = useState(csvfile);

  // State declaration for the unfiltered parsed list
  const [original, setOriginal] = useState([]);

  return (
    <div className="App">
      {original.map((person, i) => {
        return <h1>{person["first_name"]}</h1>;
      })}
    </div>
  );
}

export default App;
