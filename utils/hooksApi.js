import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

const useSearchMovie = (query) => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  return data;
};

const useSearchMovieById = () => {
  const { data } = useQuery(`movie/55662?`, () => clientApi(`movie/55662?`));
  return data;
};

const useSearchTvById = () => {
  const { data } = useQuery(`tv/55662?`, () => clientApi(`tv/55662?`));
  return data;
};

// &append_to_response=videos => supporté par movie, tv show, tv season, tv episode, person
const useTrendingList = () => {
  const { data } = useQuery(`trending/all/week?`, () =>
    clientApi(`trending/all/week?`)
  );
  const newData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  console.log("newData", newData);
  return newData ?? [];
};

const useGenreMovieList = () => {
  const { data } = useQuery(`genre/movie/list?`, () =>
    clientApi(`genre/movie/list?`)
  );
  return data;
};

// `https://api.themoviedb.org/3/discover/movie?api_key=3e60af79cdb5ec9712643d82c7b38812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const useDiscoverMovie = () => {
  const { data } = useQuery(`discover/movie?`, () =>
    clientApi(`discover/movie?`)
  );
  return data;
};

// const useGetMovieImages = () => {
//   const { data } = useQuery(`movie/315162/images?`, () =>
//     clientApi(`movie/315162/images?`)
//   );
//   return data;
// };

export {
  useSearchMovie,
  useTrendingList,
  useDiscoverMovie,
  // useGetMovieImages,
  useSearchMovieById,
  useGenreMovieList,
  useSearchTvById,
};

// lien qui fonctionne
// IMPORTANT : retirer le language pour obtenir toutes les images possibles
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812
