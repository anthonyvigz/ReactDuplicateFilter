import React, { useState } from "react";

// This components renders each person/user in the list
export default function Person(props) {
  return (
    <div className="userBlock" style={{ background: props.color }}>
      <h1>{props.person["id"]}</h1>
      <h1>{props.person["first_name"]}</h1>
      <h1>{props.person["last_name"]}</h1>
    </div>
  );
}
