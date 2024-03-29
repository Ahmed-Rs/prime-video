import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";
import uniqBy from "lodash.uniqby";
import {
  addFavoriteFilms,
  deleteFavoriteFilms,
  getCurrentUser,
  getFavoriteFilmsIds,
} from "../pages/api/FirestoreApi";

const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return currentUser;
};

const useGetFavoriteFilmsIds = () => {
  const currentUser = useGetCurrentUser();

  const { data } = useQuery(
    ["favoriteFilmsIds", currentUser?.userID],
    () => {
      // On ajoute la condition suivante pour s'assurer de la présence du userID, sinon problème 'cannot call doc() with empty path'
      if (currentUser.userID) {
        return getFavoriteFilmsIds(currentUser?.userID);
      } else {
        return Promise.resolve({ seriesIds: [], moviesIds: [] });
      }
    },
    {
      onSuccess: ({}) => {
        console.log("Mise en cache des films Firestore réussie.");
      },
      enabled: !!currentUser?.userID, // N'exécuter la requête (useQuery) que SI ET SEULEMENT SI la condition est remplie
    }
  );
  return data;
};

const useAddFavoriteFilmsMutation = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const queryClient = useQueryClient();
  const addFavoriteFilmsMutation = useMutation(
    ({ userID, id, media_type, genre_ids }) =>
      addFavoriteFilms(userID, id, media_type, genre_ids),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );
  return addFavoriteFilmsMutation;
};

const useDeleteFavoriteFilmsMutation = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const queryClient = useQueryClient();
  const deleteFavoriteFilmsMutation = useMutation(
    ({ userID, id, media_type, genre_ids }) =>
      deleteFavoriteFilms(userID, id, media_type, genre_ids),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );
  return deleteFavoriteFilmsMutation;
};
// FITRER LES FILMS / SERIES
const useMovieSelector = (type, filter, param) => {
  const enpointTrending = `trending/${type}/week?`;
  const enpointDiscover = `discover/${type}?`;
  const endpointTopRated = `${type}/top_rated`;
  const endpointLatest = `${type}/upcoming`;
  const endpointPopularity = `${type}/popular`;
  const endpointWithGenre = `discover/${type}?with_genres=${param}`;

  let endpoint;
  switch (filter) {
    case "trending":
      endpoint = enpointTrending;
      break;
    case "discover":
      endpoint = enpointDiscover;
      break;
    case "top_rated":
      endpoint = endpointTopRated;
      break;
    case "latest":
      endpoint = endpointLatest;
      break;
    case "popular":
      endpoint = endpointPopularity;
      break;
    case "genre":
      endpoint = endpointWithGenre;
      break;
    default:
      throw new Error("Requête non supportée");
  }

  const { data } = useQuery(`${endpoint}`, () => clientApi(`${endpoint}`));
  // On concatène les datas (triple arrays provenant de page=3 de clientApi) dans le array principal
  const uMSData = data?.reduce((acc, item) => {
    return acc.concat(item?.data?.results);
  }, []);
  // console.log("uMSData hooksApi : ", data);
  return uMSData ?? [];
};

// RECHERCHER UN FILMS/SERIES/PERSONNES LE TOUT GRACE A UNE QUERY
const useMultiSearcher = (query = "interstellar") => {
  const { data } = useQuery(`search/multi?query=${query}`, () =>
    clientApi(`search/multi?query=${query}`)
  );
  const multiData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  // console.log("multiData hooksApi : ", multiData);
  return multiData ?? [];
};

// Cherche plusieurs films en lien avec un titre donné
const useMovieSearcher = (query) => {
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
const useSearchMovieById = (movieId, page = 1) => {
  const { data } = useQuery(`movie/${movieId}?`, () =>
    clientApi(`movie/${movieId}?`, page)
  );
  return data ?? [];
};

const useSearchTvById = (tvId, page = 1) => {
  const { data } = useQuery(`tv/${tvId}?`, () =>
    clientApi(`tv/${tvId}?`, page)
  );
  console.log("hooksApi tvById data", data);
  return data ?? [];
};

const useSearchById = (type, id, page = 1) => {
  const { data } = useQuery(`${type}/${id}?`, () =>
    clientApi(`${type}/${id}?`, page)
  );
  // console.log("hooksApi data", data);
  return data ?? [];
};

// &append_to_response=videos => supporté par movie, tv show, tv season, tv episode, person
const useTrendingList = () => {
  // const { data } = useQuery(`trending/all/week?`, () =>
  //   clientApi(`trending/all/week?`)
  // );
  // // On concatène les datas dans le array principal
  // const uTLData = data?.reduce((acc, item) => {
  //   return acc.concat(item.data.results);
  // }, []);
  // // console.log("uTLData hooksApi : ", uTLData);
  // return uTLData ?? [];
};

// Donne la liste de tous les genre de films disponibles sur TMDB
// Les ids des genres diffèrent même pour un même genre suivant que type "movie" ou "tv" ??
const useGenreMovieList = (type) => {
  const { data } = useQuery(`genre/${type}/list?`, () =>
    clientApi(`genre/${type}/list?`)
  );
  // On trie les doublons et on en extrait la propriété "genre" nécessaire
  const filteredData = uniqBy(data, "genres")[0]?.data?.genres;
  // console.log("uGMLData", filteredData);
  return filteredData;
};

// `https://api.themoviedb.org/3/discover/movie?api_key=3e60af79cdb5ec9712643d82c7b38812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

// Parcours la database à la découverte de films au hasard
const useDiscoverFilms = (type) => {
  const { data } = useQuery(`discover/${type}?`, () =>
    clientApi(`discover/${type}?`)
  );
  const uDMData = data?.reduce((acc, item) => {
    return acc.concat(item.data.results);
  }, []);
  // console.log("uDMData hooksApi : ", uDMData);
  return uDMData ?? [];
};

// Donne les images 'backdrops', 'logos' et 'poster' du movie recherché
const useGetMovieImages = (movieId, page = 1) => {
  const { data } = useQuery(
    `movie/${movieId}/images?include_image_language=en`,
    () => clientApi(`movie/${movieId}/images?include_image_language=en`, page)
  );
  // console.log("uGMIData hooksApi : ", data);
  return data;
};

export {
  useMovieSearcher,
  useTrendingList,
  useDiscoverFilms,
  useGetMovieImages,
  useSearchMovieById,
  useSearchTvById,
  useGenreMovieList,
  useMovieSelector,
  useMultiSearcher,
  useSearchById,
  useGetFavoriteFilmsIds,
  useAddFavoriteFilmsMutation,
  useDeleteFavoriteFilmsMutation,
  useGetCurrentUser,
};

// lien qui fonctionne
// IMPORTANT : retirer le language pour obtenir toutes les images possibles
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812&append_to_response=videos
// https://api.themoviedb.org/3/movie/505642/images?api_key=3e60af79cdb5ec9712643d82c7b38812
