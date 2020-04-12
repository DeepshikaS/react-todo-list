import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default (props) => (
  <div id="onee" style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      <p id="txt">{props.todo.text}</p>
    </div>
    <button id="tr" onClick={props.onDelete}>
      Delete
    </button>
  </div>
);
