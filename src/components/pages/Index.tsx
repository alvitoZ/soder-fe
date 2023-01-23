import Blog from "../organisms/Index";
import { useNavigate } from "react-router-dom";
import PostButton from "../atoms/Button";
// import { useEffect } from "react";
// import axios from "axios";

function Fetch() {
  const Navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/v1/blog").then((res) => {});
  // }, []);
  return (
    <>
      <div>
        <div>
          <div>
            <PostButton
              label="BUAT POSTINGAN"
              onClick={() => Navigate(`/HalamanPost`)}
            />
            <PostButton
              label="REGISTER"
              onClick={() => Navigate(`/register`)}
            />
            <PostButton label="LOGIN" onClick={() => Navigate(`/login`)} />
          </div>

          <Blog />
        </div>
      </div>
    </>
  );
}

export default Fetch;
