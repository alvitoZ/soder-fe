import React from "react";

function PostInput({ label = "", type = "text", ...rest }) {
  return (
    <>
      <div>
        <p className="">{label}</p>
        <input className="" {...rest} type={type} />
      </div>
    </>
  );
}

export default PostInput;
