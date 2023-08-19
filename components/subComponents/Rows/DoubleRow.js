/* eslint-disable react/no-find-dom-node */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
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
import {
  addFavoriteFilms,
  deleteFavoriteFilms,
  getCurrentUser,
} from "../../../pages/api/FirestoreApi";
import { useMutation, useQueryClient } from "react-query";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";
import { useRouter } from "next/router";

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

export default function DoubleRow({
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
  const [discoverData, setDiscoverData] = useState([]);
  const router = useRouter();
  const mappedArray = [];
  const query = searchHookRefValue;
  let searchHook = mapHook[searchHookChooser];

  const queryClient = useQueryClient();

  // const dataMovie = useMovieSelector(type, filter);

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

  // Explication de la logique des dépendances de ce useEffect dans le <CommonRow />
  useEffect(() => {
    dataTest.length ? setDiscoverData(dataTest) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTest.length]);

  for (let i = 0; i < discoverData?.length - 1; i += 2) {
    if (discoverData[i + 1] !== discoverData[i]) {
      mappedArray?.push([discoverData[i], discoverData[i + 1]]);
    }
  }
  console.log("mappedArray   ", mappedArray);

  const handleItemClick = (filmTitle, genreIds, mediaType) => {
    // Redirection vers la page du film
    router.push(
      `/filmPath/${filmTitle}?genreIds=${genreIds}&mediaType=${mediaType}`
    );
  };
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
    <div
      tabIndex={0}
      className={`u_collect double_row text-white pb-6` + ` ` + pt}
    >
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
              <h2 className="text-[19px] leading-6 p-0 mr-3 font-bold ">
                {title}
              </h2>
              <a
                role="linker"
                className="text-xs text-[#79b8f3] mt-[2px]"
                href=""
              >
                Modifier
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="card_carousel_container">
          <div className="">
            <ScrollingCarousel>
              {mappedArray?.map((double, id) => (
                <div key={id} className="double_card inline-block ">
                  <CommonRowItem
                    customImgUrl={double[0]?.poster_path}
                    trailerSetterBis={false}
                    filmTitle={double[0]?.title}
                    filmDuration
                    filmNotation={(double[0]?.vote_average).toFixed(1)}
                    filmDate={double[0]?.release_date?.substring(0, 4) ?? ""}
                    filmAge
                    onItemClick={() =>
                      handleItemClick(
                        double[0]?.name ||
                          double[0]?.original_name ||
                          double[0]?.title ||
                          double[0]?.original_title,
                        double[0]?.genre_ids,
                        double[0]?.name || double[0]?.original_name
                          ? "tv"
                          : "movie" // ICI le media_type
                      )
                    }
                    addSource={() =>
                      handleAddSource(
                        double[0]?.id,
                        double[0]?.name || double[0]?.original_name
                          ? "tv"
                          : "movie",
                        double[0]?.genre_ids
                      )
                    }
                    deleteSource={() =>
                      handleDeleteSource(
                        double[0]?.id,
                        double[0]?.name || double[0]?.original_name
                          ? "tv"
                          : "movie"
                      )
                    }
                  />
                  <CommonRowItem
                    customImgUrl={double[1]?.poster_path}
                    trailerSetterBis={false}
                    filmTitle={double[1]?.title}
                    filmDuration
                    filmNotation={(double[1]?.vote_average).toFixed(1)}
                    filmDate={double[1]?.release_date?.substring(0, 4) ?? ""}
                    filmAge
                    onItemClick={() =>
                      handleItemClick(
                        double[1]?.name ||
                          double[1]?.original_name ||
                          double[1]?.title ||
                          double[1]?.original_title,
                        double[1]?.genre_ids,
                        double[1]?.name || double[1]?.original_name
                          ? "tv"
                          : "movie" // ICI le media_type
                      )
                    }
                    addSource={() =>
                      handleAddSource(
                        double[1].id,
                        double[1].name || double[1].original_name
                          ? "tv"
                          : "movie",
                        double[1].genre_ids
                      )
                    }
                    deleteSource={() =>
                      handleDeleteSource(
                        double[1].id,
                        double[1].name || double[1]?.original_name
                          ? "tv"
                          : "movie"
                      )
                    }
                  />
                </div>
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
