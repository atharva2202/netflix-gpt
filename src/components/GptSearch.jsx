import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute w-screen h-screen bg-cover bg-center -z-10">
        <img src={BG_URL} alt="bg-image" class="w-full h-full object-cover" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
