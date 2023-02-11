import axios from "axios";
import { useState } from "react";
import { API_URL, TMDB_API_KEY, lang } from "./config";

const clientApi = async (endpoint) => {
  // "https://api.themoviedb.org/3/search/movie?query=interstellar&api_key=3e60af79cdb5ec9712643d82c7b38812&language=fr-FR";

  let dataTable = [];
  const page = 3;
  const startChar = endpoint.includes("?") ? "&" : "?";
  const preParams = `${startChar}api_key=${TMDB_API_KEY}&language=${lang}`;

  for (let i = 1; i < page + 1; i++) {
    await axios
      .get(
        // `${API_URL}/${endpoint}/${preParams}&page=${i}`
        `${API_URL}/${endpoint}/${preParams}&page=${i}&append_to_response=videos`
      )
      // .then((data) => (dataTable = dataTable?.concat(data?.data.results)));
      .then((data) => (dataTable = dataTable?.concat(data?.data.results)));
    // .then((data) => console.log(data));
  }
  // .catch((error) => console.log(error.message));
  // console.log(dataTable);
  return dataTable;
};

const clientStrictApi = async (endpoint) => {};

// Le appen to response
// &append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812

export default clientApi;
