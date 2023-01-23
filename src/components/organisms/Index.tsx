import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import Button from "../atoms/Button";

import Card from "../molecules/Card";

type User = {
  _id: string;
  username: string;
  caption: string;
  image: string;
  createdAt: string;
};
// function Index(props: props) {
function Index() {
  const [data, setData] = useState<User[]>([]);
  let [counter, setCounter] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(0);

  let hasil: number = totalPage / perPage;

  const next = () => {
    if (counter >= hasil) {
      setCounter(counter);
      // setCounter(counter = 1);
    } else {
      setCounter(counter + 1);
    }
  };

  const prev = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    const tokenLocal = window.localStorage.getItem("token");

    if (tokenLocal) {
      axios.defaults.headers.common = {
        Authorization: `bearer ${tokenLocal}`,
      };
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/blog?page=${counter}&perPage=5`)
      .then((res) => {
        setData(res.data.data);
        setTotalPage(res.data.total_data);
        setPerPage(res.data.per_page);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [counter]);

  // console.log(data);

  return (
    <>
      <div className="body">
        {data.map((e): any => {
          return (
            <Card
              key={e._id}
              image={`http://localhost:3001/images/${e.image}`}
              caption={e.caption}
              username={e.username}
              createdAt={e.createdAt}
              _id={e._id}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button label="PREV" onClick={() => prev()} />
        <p>
          {counter}/{Math.ceil(hasil)}
        </p>
        <Button label="next" onClick={() => next()} />
      </div>
    </>
  );
}

export default Index;
