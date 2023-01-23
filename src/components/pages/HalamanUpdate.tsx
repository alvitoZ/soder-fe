import React, { useState, useEffect } from "react";
import PostInput from "../atoms/PostInput";
import ImageInput from "../atoms/ImageInput";
import Button from "../atoms/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function HalamanUpdate() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const [caption, setCaption] = useState<string>("");
  const [prevCaption, setPrevCaption] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [prevImage, setPrevImage] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  // const [username, setUsername] = useState<string>("");

  const onUpload = (e: any) => {
    const file: any = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const data: any = new FormData();
  data.append("image", image);
  data.append("caption", caption);
  // data.append("username", username);

  const onSubmit = () => {
    // console.log(username);
    axios
      .put(`http://localhost:3001/api/v1/blog/${id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data);
        Navigate(`/`);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/blog/${id}`).then((res) => {
      // console.log(res.data.data);
      setPrevImage(res.data.data.image);
      setPrevCaption(res.data.data.caption);
      // setUsername(res.data.data.username);
    });
  }, []);

  return (
    <>
      <div>
        <h2>UPDATE POSTINGAN</h2>
        <div>
          <p>image sebelumnya</p>
          <img
            src={`http://localhost:3001/images/${prevImage}`}
            alt="gambar sebelumnya"
          />
        </div>
        <div>
          <ImageInput onChange={(e: any) => onUpload(e)} img={imagePreview} />
          <img src={imagePreview} alt="gambar yg diupload" />
        </div>
        <div>
          <PostInput
            label="CAPTION SEBELUMNYA"
            value={prevCaption}
            onChange={(e: any) => e}
          />
          <PostInput
            label="CAPTION"
            value={caption}
            onChange={(e: any) => setCaption(e.target.value)}
          />
          <Button label="update" onClick={() => onSubmit()} />
        </div>
      </div>
    </>
  );
}

export default HalamanUpdate;
