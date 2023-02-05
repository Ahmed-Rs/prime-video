import axios from "axios";
import { API_URL, TMDB_API_KEY, lang } from "./config";

const clientApi = async (endpoint) => {
  // "https://api.themoviedb.org/3/search/movie?query=interstellar&api_key=3e60af79cdb5ec9712643d82c7b38812&language=fr-FR";

  const startChar = endpoint.includes("?") ? "&" : "?";
  const page = 1;
  const preParams = `${startChar}api_key=${TMDB_API_KEY}&language=${lang}&page=${page}`;
  // search/movie
  const res = await axios.get(`${API_URL}/${endpoint}/${preParams}`);
  // .then((data) => console.log(data));
  // .catch((error) => console.log(error.message));
  // console.log(res?.data);
  return res;
};

export default clientApi;
