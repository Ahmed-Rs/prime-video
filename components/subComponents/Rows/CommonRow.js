/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import {
  useDiscoverFilms,
  useMovieSearcher,
  useGenreMovieList,
  useSearchMovieById,
  useSearchTvById,
  useGetMovieImages,
  useMovieSelector,
  useMultiSearcher,
  useGetCurrentUser,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";
import { useRouter } from "next/router";
import {
  addFavoriteFilms,
  deleteFavoriteFilms,
  getCurrentUser,
} from "../../../pages/api/FirestoreApi";
import { useMutation, useQueryClient } from "react-query";

const genresList = [
  {
    movies: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 36,
        name: "History",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 10402,
        name: "Music",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10749,
        name: "Romance",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 10770,
        name: "TV Movie",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "War",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  },
  {
    series: [
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 10751,
        name: "Family",
      },
      {
        id: 10762,
        name: "Kids",
      },
      {
        id: 9648,
        name: "Mystery",
      },
      {
        id: 10763,
        name: "News",
      },
      {
        id: 10764,
        name: "Reality",
      },
      {
        id: 10765,
        name: "Sci-Fi & Fantasy",
      },
      {
        id: 10766,
        name: "Soap",
      },
      {
        id: 10767,
        name: "Talk",
      },
      {
        id: 10768,
        name: "War & Politics",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
  },
];

// Le mapHook sert à choisir le custom hook en fonction du searchHookChooser
const mapHook = {
  discover: useDiscoverFilms,
  multi: useMultiSearcher,
  unique: useMovieSearcher,
  movieById: useSearchMovieById,
  tvById: useSearchTvById,
  getImg: useGetMovieImages,
  genreListe: useGenreMovieList,
  select: useMovieSelector,
  "": useMovieSelector,
};

function CommonRow({
  title,
  pt,
  titleAlign,
  textColor = "",
  searchHookChooser = "",
  searchHookRefValue,
  type,
  filter,
  param = "",
}) {
  const [dataMovieTest, setDataMovieTest] = useState([]);
  const router = useRouter();
  // const [currentUser, setCurrentUser] = useState({});
  let searchHook = mapHook[searchHookChooser];
  const query = searchHookRefValue;
  const queryClient = useQueryClient();

  const dataTest =
    searchHookChooser !== ""
      ? searchHookChooser !== "select"
        ? searchHook(query)
        : searchHook(
            type ? type : "tv",
            filter ? filter : "trending",
            param ? param : null
          ) // "param" ne fonctionne que si filter = "genre"
      : searchHook("all", "trending"); // Ici le hook et ses variables par défaut
  // ^ A TRAITER

  useEffect(() => {
    dataTest?.length ? setDataMovieTest(dataTest) : "";
  }, [dataTest?.length]);
  // console.log("dataMovieTest  ", dataMovieTest);

  const handleItemClick = (filmTitle, genreIds, mediaType) => {
    // Redirection vers la page du film
    router.push(
      `/filmPath/${filmTitle}?genreIds=${genreIds}&mediaType=${mediaType}`
    );
  };

  // AFFICHER LES BACKDROPS CONTENANT UN TITRE
  // Ne garde que les films contenant une image
  const filteredMovies = dataMovieTest?.filter((film) => film?.backdrop_path);
  console.log("filteredMovies  ", filteredMovies);

  // Extraction des ids dans un array
  const filteredIds = filteredMovies?.map((film) => film?.id);
  console.log("filteredIds         ", filteredIds);

  // Gestion de l'id du film pour l'ajout aux favoris de l'utilisateur
  const currentUser = useGetCurrentUser();

  // MUTATIONS
  const addFavoriteFilmsMutation = useMutation(
    ({ userID, id, media_type, genre_ids }) =>
      addFavoriteFilms(userID, id, media_type, genre_ids),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );

  const deleteFavoriteFilmsMutation = useMutation(
    ({ userID, id, media_type }) => deleteFavoriteFilms(userID, id, media_type),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );

  const handleAddSource = (filmId, mediaType, genreIds) => {
    addFavoriteFilmsMutation.mutate({
      userID: currentUser?.userID,
      id: filmId,
      media_type: mediaType,
      genre_ids: genreIds,
    });
  };
  const handleDeleteSource = (filmId, mediaType) => {
    deleteFavoriteFilmsMutation.mutate({
      userID: currentUser?.userID,
      id: filmId,
      media_type: mediaType,
    });
  };

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
      <div className="inline-block max-w-[100px] max-h-[100px]"></div>
      <div className="u_coll_container ">
        <div className="title_container mx-12 mb-2 leading-6">
          <div className="pe7 flex items-center">
            <div className="logo_container">
              <span>
                <img
                  className="pr-4"
                  src="\welcome\prime-logo-large-v4.png"
                  alt=""
                />
              </span>
            </div>
            <div
              className={
                `flexor flex justify-` + titleAlign + ` ` + `ml-0 w-full`
              }
            >
              <h2
                className={
                  `text-[19px] ` +
                  `${textColor} ` +
                  ` leading-6 p-0 mr-3 font-bold`
                }
              >
                {title}
              </h2>
              <a className="text-xs text-[#79b8f3] mt-[2px]" href="">
                Modifier
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="card_carousel_container">
          <div className="">
            <ScrollingCarousel>
              {filteredMovies?.map((film, index) => (
                <CommonRowItem
                  key={index}
                  film={film}
                  customImgUrl={film?.backdrop_path}
                  filmTitle={
                    film?.name ||
                    film?.original_name ||
                    film?.title ||
                    film?.original_title
                  }
                  filmDescription={film?.overview}
                  filmDuration
                  filmNotation={(film?.vote_average).toFixed(1)}
                  filmDate={film?.release_date?.substring(0, 4) ?? ""}
                  filmAge
                  // Simplification de la logique de choix du nom de la propriété contenant le titre du film en utilisant l'opérateur logique ||
                  onItemClick={() =>
                    handleItemClick(
                      film?.name ||
                        film?.original_name ||
                        film?.title ||
                        film?.original_title,
                      film?.genre_ids,
                      film?.name || film?.original_name ? "tv" : "movie" // ICI le media_type
                    )
                  }
                  addSource={() =>
                    handleAddSource(
                      film?.id,
                      film?.name || film?.original_name ? "tv" : "movie",
                      film?.genre_ids
                    )
                  }
                  deleteSource={() =>
                    handleDeleteSource(
                      film?.id,
                      film?.name || film?.original_name ? "tv" : "movie"
                    )
                  }
                />
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonRow;
