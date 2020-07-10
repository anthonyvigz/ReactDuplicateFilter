import React from "react";

export default function Modal(props) {
  return (
    <div
      onClick={() => props.showModal(false)}
      className={props.visible ? "modal" : "modal hide"}
    >
      <div className="grayedBackdrop">{props.person["last_name"]}</div>
    </div>
  );
}
