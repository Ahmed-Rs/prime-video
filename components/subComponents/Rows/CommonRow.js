/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import {
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

// Le mapHook sert à choisir le custom hook en fonction du searchHookChooser
const mapHook = {
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
  searchHookChooser = "",
  searchHookRefValue,
  type,
  filter,
  param,
}) {
  const [dataMovieTest, setDataMovieTest] = useState([]);
  const router = useRouter();
  // const [currentUser, setCurrentUser] = useState({});
  let searchHook = mapHook[searchHookChooser];
  const query = searchHookRefValue;
  const queryClient = useQueryClient();

  // console.log("query xxx => ", query);

  // let type = "tv";
  // let filter = "genre";
  // let param = "16"; //"param" ne fonctionne que si filter = "genre"
  // const typeTest = "tv";
  // const filterTest = "discover";

  // const dataDiscoverer = useMovieSelector(typeTest, filterTest);
  // useEffect(() => {
  //   dataDiscoverer.length ? setDataMovie(dataDiscoverer) : "";
  // }, [dataDiscoverer.length]);
  // console.log("dataMovieUDM CommonRow : ", dataMovie);

  const dataTest =
    searchHookChooser !== ""
      ? searchHookChooser !== "select"
        ? searchHook(query)
        : searchHook(type ? type : "tv", filter ? filter : "trending") // "param" ne fonctionne que si filter = "genre"
      : searchHook("all", "trending"); // Ici le hook et ses variables par défaut

  useEffect(() => {
    dataTest?.length ? setDataMovieTest(dataTest) : "";
  }, [dataTest?.length]);

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
    ({ userID, filmId, mediaType, genreIds }) =>
      addFavoriteFilms(userID, filmId, mediaType, genreIds),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );

  const deleteFavoriteFilmsMutation = useMutation(
    ({ userID, filmId, mediaType }) =>
      deleteFavoriteFilms(userID, filmId, mediaType),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favoriteFilmsIds", currentUser?.userID);
      },
    }
  );

  const handleAddSource = (filmId, mediaType, genreIds) => {
    addFavoriteFilmsMutation.mutate({
      userID: currentUser?.userID,
      filmId: filmId,
      mediaType: mediaType,
      genreIds: genreIds,
    });
  };
  const handleDeleteSource = (filmId, mediaType) => {
    deleteFavoriteFilmsMutation.mutate({
      userID: currentUser?.userID,
      filmId: filmId,
      mediaType: mediaType,
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
              <h2 className="text-[19px] leading-6 p-0 mr-3 font-bold ">
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
              {dataMovieTest?.map((film, index) =>
                film?.backdrop_path ? (
                  <CommonRowItem
                    key={index}
                    film={film}
                    customImgUrl={film?.backdrop_path}
                    filmTitle={
                      film?.media_type == "tv" ? film?.name : film?.title
                    }
                    filmDescription={film?.overview}
                    filmDuration
                    filmNotation={(film?.vote_average).toFixed(1)}
                    filmDate={film?.release_date?.substring(0, 4) ?? ""}
                    filmAge
                    onItemClick={() =>
                      handleItemClick(
                        film?.media_type == "tv" ? film?.name : film?.title,
                        film?.genre_ids,
                        film?.media_type
                      )
                    }
                    addSource={() =>
                      handleAddSource(
                        film?.id,
                        film?.media_type,
                        film?.genre_ids
                      )
                    }
                    deleteSource={() =>
                      handleDeleteSource(film?.id, film?.media_type)
                    }
                  />
                ) : (
                  <></>
                )
              )}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonRow;
