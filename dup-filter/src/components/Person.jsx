import React, { useState } from "react";
import Modal from "./Modal";

// This components renders each person/user in the list
export default function Person(props) {
  // Controls the visibility state of the modal
  const [modal, showModal] = useState(false);

  return (
    <div
      onClick={() => showModal(!modal)}
      className={props.transition ? "userBlock" : "userBlock hide"}
      style={{ background: props.color }}
    >
      <h1>{props.person["id"]}</h1>
      <h1>{props.person["first_name"]}</h1>
      <h1>{props.person["last_name"]}</h1>
      <Modal
        visible={modal}
        person={props.person}
        color={props.color}
        showModal={showModal}
      />
    </div>
  );
}
