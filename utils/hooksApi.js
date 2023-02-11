import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

const useSearchMovie = (query) => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  return data;
};

// LA REPONSE DE REQUETE EST EN DIFFERENT FORMAT SUIVANT QUE SOIT LANCE UN MOVIE/MOVIE_ID OU UN SEARCH/MOVIE/QUERY DONC PREVOIR UNE NOUVELLE FCT DANS LE FICHIER CLIENT API
// IMPORTANT: REGROUPER LES ENDPOINTS QUI PRESENTENT UN FORMAT DE REPONSE IDENTIQUE
// FINALEMENT POSSIBILITE QUE LES FORMATS SOIENT TOUS LES MEMES, A CONFIRMER

const useSearchMovieById = () => {
  const { data } = useQuery(`movie/157336?`, () => clientApi(`movie/157336?`));
  return data;
};

const useSearchTvById = () => {
  const { data } = useQuery(`tv/56343?`, () => clientApi(`tv/56343?`));
  return data;
};

// &append_to_response=videos => supporté par movie, tv show, tv season, tv episode, person
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

// `https://api.themoviedb.org/3/discover/movie?api_key=3e60af79cdb5ec9712643d82c7b38812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

const useDiscoverMovie = () => {
  const { data } = useQuery(`discover/movie?`, () =>
    clientApi(`discover/movie?`)
  );
  return data;
};

// `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US`;
const useGetMovieImages = () => {
  const { data } = useQuery(`movie/505642/videos?`, () =>
    clientApi(`movie/505642/videos?`)
  );
  return data;
};

export {
  useSearchMovie,
  useTrendingList,
  useDiscoverMovie,
  useGetMovieImages,
  useSearchMovieById,
  useGenreMovieList,
  useSearchTvById,
};
