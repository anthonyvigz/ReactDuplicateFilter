import React, { useState, useEffect } from "react";
import csvfile from "./testFiles/normal.csv";
import csvadvancedfile from "./testFiles/advanced.csv";
// Parser
import Papa from "papaparse";
// Fuzzy duplicate algorithms
import doubleMetaphone from "double-metaphone";
import levenshtein from "levenshtein-edit-distance";
// Styling
import "./styling/main.scss";

// This components renders each instance of a user/person in a list
import Person from "./components/Person.jsx";

function App() {
  // State declaration for the current CSV file
  const [file, setFile] = useState(csvadvancedfile);

  // State declaration for the unfiltered parsed list, filtered list, and duplicate list
  const [original, setOriginal] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [removed, setRemoved] = useState([]);

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

  // Fuzzy filter duplicate algorithm
  const filterDuplicates = () => {
    // Copies of original array to compare items
    const list1 = [...original];
    const list2 = [...original];
    // Empty array to fill with removed duplicates
    const list3 = [];

    // Map through each cloned array to compare each item/person
    list1.map((person, i) => {
      list2.map((check, j) => {
        // This condition utilizes the levenshtein library.
        // If the two compared indexes are within 1 or less
        // for a levenshtein distance, it's a duplicate
        // The second condition assures the index it is referring to
        // is not itself
        if (
          levenshtein(person["last_name"], check["last_name"]) <= 1 &&
          i != j
        ) {
          // Add the duplicate to the duplicate list
          list3.push(list1[j]);
          // Remove the duplicate from both lists so
          // the indexes stay consistent and won't be compared again
          list1.splice(j, 1);
          list2.splice(j, 1);
          // If condition isn't met, pass
        } else {
          return null;
        }
      });
    });
    // Update filtered list state
    setFiltered(list1);
    // Update duplicate list state
    setRemoved(list3);
  };

  return (
    <div className="mainApp">
      <div className="title">
        <h1>React</h1>
        <h2>Fuzzy Duplicate</h2>
        <h3>Filter</h3>
        <h4>Validity Assessment</h4>
        <h4>Anthony Vigliotta</h4>
      </div>
      <button onClick={() => filterDuplicates()}>FILTER</button>
      <div className="columns">
        <div className="people">
          {original.map((person, i) => {
            return <Person key={i} color="#5e63e4" person={person} />;
          })}
        </div>
        <div className="people">
          {filtered.map((person, i) => {
            return <Person key={i} color="#1cbd44" person={person} />;
          })}
        </div>
        <div className="people">
          {removed.map((person, i) => {
            return <Person key={i} color="#b13939" person={person} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
