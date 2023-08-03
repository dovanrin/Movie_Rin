import React, { useEffect, useState } from "react";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { getAllMovie } from "../../redux/slices/nguoiDungSlice";
import { params } from "react-router-dom";
const Demo = () => {
  // console.log(movies);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    nguoiDungServ
      .delda(params.id)
      .then((result) => {
        console.log(result);
        setMovies(result.data.content);
        // dispatch(set_loading_ended);
      })
      .catch((err) => {
        console.log(err);
        // dispatch(set_loading_ended);
      });
  }, []);
  return <div>Demo</div>;
};

export default Demo;
