import React from "react";
// import "./Register.css";
import styles from "./Register.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PostInput from "../atoms/PostInput";
import Button from "../atoms/Button";
import Text from "../molecules/Text";

function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const Navigate = useNavigate();

  const data = { username: username, password: password };

  const onSubmit = (): void => {
    // console.log(username);
    // console.log(password);
    axios
      .post("http://localhost:3001/api/v1/auth/register", data)
      .then((res) => {
        // console.log(res);
        Navigate("/login");
      })
      .catch((err) => {
        // setError(
        //   `${err.response.data.errors[0].msg} / user failed / nama udh ada yg make`
        // );
        setError(`jgn pke {/} / user failed / nama udh ada yg make`);
        // console.log(err.response.data.msg);
      });
  };

  return (
    <>
      <div className={`${styles.registerForm} ${styles.warna}`}>
        <Text
          text1="HALAMAN REGISTER"
          text2="SILAHKAN MASUKAN USERNAME DAN PASS"
          text3=""
        />

        <PostInput
          label="username"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <PostInput
          label="password"
          value={password}
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button label="login" onClick={() => onSubmit()} />
      </div>
      <div>
        <p>log error</p>
        <p>{error}</p>
      </div>
    </>
  );
}

export default Register;
