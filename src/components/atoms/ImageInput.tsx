import React from "react";
import styles from "./ImageInput.module.css";

function ImageInput({ img = "", ...rest }) {
  return (
    <div>
      {img && (
        <img
          crossOrigin="anonymous"
          src={img}
          alt="gambar"
          className={`${styles.img}`}
        />
      )}
      <input type="file" {...rest} />
    </div>
  );
}

export default ImageInput;
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Fg-i29sJdsLVa_c994EKzh1KCimUjWSlbY6ef-pKOw&s
