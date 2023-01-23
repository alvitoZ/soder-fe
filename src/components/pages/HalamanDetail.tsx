import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  // console.log(id);

  const [data, setData] = useState<any>([]);

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
    </>
  );
}

export default HalamanDetail;
