import React from "react";
import "./Login.css";
import Text from "../molecules/Text";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PostInput from "../atoms/PostInput";
import Button from "../atoms/Button";

function Login() {
  const Navigate = useNavigate();

  const [token, setToken] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const data = { username: username, password: password };

  const onSubmit = (): void => {
    axios
      .post("http://localhost:3001/api/v1/auth/login", data)
      .then((res) => {
        setToken(res.data.token);
        axios.defaults.headers.common = {
          Authorization: `bearer ${token}`,
        };
        setSuccess("login berhasil");
      })
      .catch((err) => {
        setError(err.response.data.errors[0].msg + "/ user gada");
      });
  };

  useEffect(() => {
    if (token === "") {
      const tokenLocal = window.localStorage.getItem("token");
      if (tokenLocal) {
        axios.defaults.headers.common = {
          Authorization: `bearer ${tokenLocal}`,
        };
      }
    } else {
      window.localStorage.setItem("token", token);
      axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    }
  }, [token]);

  return (
    <>
      <div className="loginForm">
        <Text
          text1="HALAMAN LOGIN"
          text2="SILAHKAN MASUKAN USERNAME DAN PASS"
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

        <h3>{error}</h3>
        <h3>{success}</h3>
      </div>
      <Button onClick={() => Navigate("/")} label="kembali ke halaman utama" />
    </>
  );
}

export default Login;
