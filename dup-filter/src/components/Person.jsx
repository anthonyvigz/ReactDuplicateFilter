import React, { useState } from "react";

// This components renders each person/user in the list
export default function Person(props) {
  return (
    <div className="userBlock" style={{ background: props.color }}>
      {props.person["id"]} {props.person["last_name"]}
    </div>
  );
}
