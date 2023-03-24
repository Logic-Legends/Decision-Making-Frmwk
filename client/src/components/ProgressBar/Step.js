import React from "react";

export default function Step(props) {
  return (
    <div className={"stepBlock" + (props.selected? " selected": "") +(props.grayed? " grayed":"") }>
    <div className={"circleWrapper" } >
        <div className={"circle"}>{props.label}</div>
        <span>{props.currentStep}</span>
    </div>
    </div>
  );
}
