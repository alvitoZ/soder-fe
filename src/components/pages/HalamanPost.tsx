import React, { useState } from "react";

import PostInput from "../atoms/PostInput";
import ImageInput from "../atoms/ImageInput";
import Button from "../atoms/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// type Blog = {
//   caption: string;
// };

function HalamanPost() {
  const Navigate = useNavigate();

  const [caption, setCaption] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");

  const data: any = new FormData();
  data.append("image", image);
  data.append("caption", caption);

  const onUpload = (e: any) => {
    const file: any = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = () => {
    // console.log(caption);
    // console.log(image);

    axios
      .post("http://localhost:3001/api/v1/blog/", data, {
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

  return (
    <>
      <div>
        <p>BUAT POSTINGAN BARU</p>
        <ImageInput onChange={(e: any) => onUpload(e)} img={imagePreview} />
        <img src={imagePreview} alt="gambar yg diupload" />
        <PostInput
          label="CAPTION"
          value={caption}
          onChange={(e: any) => setCaption(e.target.value)}
        />
        <Button label="CREATE" onClick={() => onSubmit()} />
      </div>
    </>
  );
}

export default HalamanPost;
