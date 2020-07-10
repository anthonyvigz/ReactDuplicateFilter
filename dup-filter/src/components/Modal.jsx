import React from "react";

export default function Modal(props) {
  return (
    <div
      onClick={() => props.showModal(false)}
      className={props.visible ? "modal" : "modal hide"}
    >
      <div className="grayedBackdrop">
        <div className="modalBlock">
          <h1 id="idtext">{props.person["id"]}</h1>
          <h1 id="nametext">
            {props.person["first_name"]} {props.person["last_name"]}
          </h1>
          <h1 id="companytext">{props.person["company"]}</h1>
          <h1 id="emailtext">{props.person["email"]}</h1>
          <div className="address" style={{ background: props.color }}>
            <h1>{props.person["address1"]}</h1>
            <h1>{props.person["address2"]}</h1>
            <h1>
              {props.person["city"]}, {props.person["state"]}
            </h1>
            <h1>{props.person["zip"]}</h1>
          </div>
          <h1 id="phonetext">Phone: {props.person["phone"]}</h1>
        </div>
      </div>
    </div>
  );
}
