import React, { useState, useEffect } from "react";
import csvfile from "./testFiles/normal.csv";
import Papa from "papaparse";

function App() {
  // State declaration for the current CSV file
  const [file, setFile] = useState(csvfile);

  // State declaration for the unfiltered parsed list
  const [original, setOriginal] = useState([]);

  // Parsing CSV file through useEffect just in case anything
  // changes on re-render
  useEffect(() => {
    // async function to make sure the file is read correctly
    async function getData() {
      const response = await fetch(file); // store the response from the request
      const reader = response.body.getReader();
      const result = await reader.read(); // result is raw array with utf-8 value
      const decoder = new TextDecoder("utf-8"); // set up decoder to read the result
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // papaparse parses readable CSV data
      const original = results.data; // access JSON array from papaparse result
      setOriginal(original); // sets the JSON array to our state for the app
    }
    getData();
  }, []);

  console.log(original);

  return (
    <div className="mainApp">
      {original.map((person, i) => {
        return <h1>{person["first_name"]}</h1>;
      })}
    </div>
  );
}

export default App;
