import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60 px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>

      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="my-4 ">
        <button className="bg-white text-black p-4 px-10 text-xl  rounded-lg hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
