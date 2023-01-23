import React from "react";
import "./Text.css";

type props = {
  text1: string;
  text2?: string;
  text3?: string;
};

function Text(props: props) {
  return (
    <>
      <div className="container">
        <p className="text1">{props.text1}</p>
        <p className="text2">{props.text2}</p>
        <p className="text3">{props.text3}</p>
      </div>
    </>
  );
}

export default Text;
