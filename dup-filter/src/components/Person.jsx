import React, { useState } from "react";

// This components renders each person/user in the list
export default function Person(props) {
  return (
    <div className="userBlock">
      {props.person["id"]} {props.person["last_name"]}
    </div>
  );
}
