import React from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

function Guest() {
  const Navigate = useNavigate();

  const onSubmit = (): void => {
    Navigate("/");
  };
  return (
    <>
      <div>
        <Button label="MASUK SEBAGAI GUEST" onClick={() => onSubmit()} />
      </div>
    </>
  );
}

export default Guest;
