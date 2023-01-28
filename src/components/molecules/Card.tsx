import { useNavigate } from "react-router-dom";
import "./Card.css";

type props = {
  _id: string;
  username: string;
  caption: string;
  image: string;
  createdAt: string;
};

function Card(props: props) {
  const Navigate = useNavigate();

  const { username, caption, image, createdAt, _id } = props;
  return (
    <div className="wrapper">
      <div className="img-thumb">
        <img src={image} alt="" />
        <p className="username">{username}</p>
      </div>
      <p className="caption">{caption}</p>
      <p className="createdAt">{createdAt}</p>
      <button onClick={() => Navigate(`/HalamanDetail/${_id}`)}>DETAIL</button>
      <button onClick={() => Navigate(`/HalamanUpdate/${_id}`)}>UPDATE</button>
    </div>
  );
}

export default Card;
