import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

// Cherche plusieurs films en lien avec un titre donné
const useSearchMovie = (query = "interstellar") => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  // On concatène les datas dans le array principal
  const uSMInterstellarData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  // console.log("uSMInterstellarData hooksApi : ", uSMInterstellarData);
  return uSMInterstellarData ?? [];
};

// On est obligés d'appeler les hooks comme useSearchMovieById dans un composant (<CommonRow />) pour pouvoir afficher le contenu du console.log() ci-dessous relatif à useSearchMovieById dans clientApi.js
// Donne les datas relatives au film dont on a entré l'id, ici 238 "le parrain"
const useSearchMovieById = () => {
  // PENSER A UTILISER LA METHOD DES ARRAYS QUI EMPECHE LES REPETITIONS
  const { data } = useQuery(`movie/238?`, () => clientApi(`movie/238?`));
  // const uSMBIdData = data?.reduce((acc, item) => {
  //   return acc.concat(item.data.results);
  // }, []);
  // console.log("uSMBIdData", uSMBIdData);
  // console.log("uSMBIdData hooksApi : ", data);
  return data ?? [];
};

const useSearchTvById = () => {
  // PENSER A UTILISER LA METHOD DES ARRAYS QUI EMPECHE LES REPETITIONS
  const { data } = useQuery(`tv/60625?`, () => clientApi(`tv/60625?`));
  // const uSTBIdData = data?.reduce((acc, item) => {
  //   return acc.concat(item.data.results);
  // }, []);
  // console.log("uSTBIdData", data);
  return data ?? [];
};

// &append_to_response=videos => supporté par movie, tv show, tv season, tv episode, person
const useTrendingList = () => {
  const { data } = useQuery(`trending/all/week?`, () =>
    clientApi(`trending/all/week?`)
  );
  // On concatène les datas dans le array principal
  const uTLData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  // console.log("uTLData hooksApi : ", uTLData);
  return uTLData ?? [];
};

// Donne la liste de tous les genre de films disponibles sur TMDB
// PENSER A UTILISER LA METHOD DES ARRAYS QUI EMPECHE LES REPETITIONS
const useGenreMovieList = () => {
  const { data } = useQuery(`genre/movie/list?`, () =>
    clientApi(`genre/movie/list?`)
  );
  // const uGMLData = data?.reduce((acc, item) => {
  //   return acc.concat(item.data.results);
  // }, []);
  console.log("uGMLData", data);
  return data ?? [];
};

// `https://api.themoviedb.org/3/discover/movie?api_key=3e60af79cdb5ec9712643d82c7b38812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// Parcours la database à la découverte de films au hasard
const useDiscoverMovie = () => {
  const { data } = useQuery(`discover/movie?`, () =>
    clientApi(`discover/movie?`)
  );
  const uDMData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  // console.log("uDMData hooksApi : ", uDMData);
  return uDMData ?? [];
};

// Donne les images 'backdrops', 'logos' et 'poster' du movie recherché
const useGetMovieImages = () => {
  // PENSER A UTILISER LA METHOD DES ARRAYS QUI EMPECHE LES REPETITIONS
  const { data } = useQuery(`movie/315162/images?`, () =>
    clientApi(`movie/315162/images?`)
  );
  console.log("uGMIData hooksApi : ", data);
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

// lien qui fonctionne
// IMPORTANT : retirer le language pour obtenir toutes les images possibles
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812
