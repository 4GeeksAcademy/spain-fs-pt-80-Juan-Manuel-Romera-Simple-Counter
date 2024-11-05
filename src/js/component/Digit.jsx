import React from "react";

export const Digit = (props) => {
  return (
    <span className="digit" style={props.digitStyle}>
      {props.digit}
    </span>
  );
};

//import React from "react";
//
//export const Digit = ({ digit }) => {
//  return (
//    <span className="digit">
//      {digit}
//    </span>
//  );
//};