import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import axios from "axios";

// type User = {
//   _id: string;
//   username: string;
//   caption: string;
//   image: string;
//   createdAt: string;
// };

function HalamanDetail() {
  const { id } = useParams();
  const Navigate = useNavigate();
  // console.log(id);

  const [data, setData] = useState<any>([]);
  // const [username, setUsername] = useState<string>("");

  // const datas: any = { username: username };

  // const datas: any = new FormData();
  // data.append("username", data.username);

  // content-length
  // :
  // "22"
  // content-type
  // :
  // "application/json; charset=utf-8"

  const onSubmit = (): void => {
    axios
      .delete(`http://localhost:3001/api/v1/blog/${id}`, {
        data: {
          username: data.username,
        },
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res);
        Navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/blog/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{data.username}</h1>
        <p>{data.caption}</p>
        <img
          crossOrigin="anonymous"
          src={`http://localhost:3001/images/${data.image}`}
          alt="intinya gambar"
        />
        <p>{data.createdAt}t</p>
      </div>
      <Button label="DELETE" onClick={() => onSubmit()} />
    </>
  );
}

export default HalamanDetail;
