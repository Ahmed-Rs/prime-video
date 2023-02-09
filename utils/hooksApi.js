import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

const useSearchMovie = (query) => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  return data;
};

const useTrendingList = () => {
  const { data } = useQuery(`trending/all/week?`, () =>
    clientApi(`trending/all/week?`)
  );
  return data;
};

const useGenreMovieList = () => {
  const { data } = useQuery(`genre/movie/list?`, () =>
    clientApi(`genre/movie/list?`)
  );
  return data;
};

`https://api.themoviedb.org/3/discover/movie?api_key=3e60af79cdb5ec9712643d82c7b38812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const useDiscoverMovie = () => {
  const { data } = useQuery(`discover/movie?`, () =>
    clientApi(`discover/movie?`)
  );
  return data;
};

export { useSearchMovie, useTrendingList, useDiscoverMovie };
