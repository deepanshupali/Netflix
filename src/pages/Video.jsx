import React from "react";
import ReactPlayer from "react-player";
import { UserAuth } from "../context/AuthContext";

const Video = () => {
  const { key } = UserAuth();
  //id-->key-->youtube video

  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center fixed top-15    ">
      <ReactPlayer
        width="60%"
        height="60%"
        url={`https://www.youtube.com/watch?v=${key}`}
      ></ReactPlayer>
    </div>
  );
};

export default Video;
