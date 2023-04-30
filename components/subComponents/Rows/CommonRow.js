/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import {
  useMovieSearcher,
  useSearchMovieById,
  useGenreMovieList,
  useSearchTvById,
  useGetMovieImages,
  useMovieSelector,
  useMultiSearcher,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";
import { useRouter } from "next/router";
import {
  addFavoriteMovies,
  getCurrentUser,
} from "../../../pages/api/FirestoreApi";

// Le mapHook sert à choisir le custom hook en fonction du searchHookChooser
const mapHook = {
  multi: useMultiSearcher,
  unique: useMovieSearcher,
  movByid: useSearchMovieById,
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
  localParam,
}) {
  const [dataMovieTest, setDataMovieTest] = useState([]);
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  let type = "movie";
  let filter = "discover";
  let param = localParam;
  let searchHook = mapHook[searchHookChooser];
  const query = searchHookRefValue;

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
        : searchHook((type = "movie"), (filter = "genre"), (param = param)) //"param" ne fonctionne que si filter = "genre"
      : searchHook("all", "trending"); // Ici le hook et ses variables par défaut

  useEffect(() => {
    dataTest?.length ? setDataMovieTest(dataTest) : "";
  }, [dataTest?.length]);
  // console.log("dataMovieTest =>", dataMovieTest);

  const handleItemClick = (filmTitle, genreIds) => {
    // Redirection vers la page du film
    router.push(`/filmPath/${filmTitle}?genreIds=${genreIds}`);
  };

  // Gestion de l'id du film pour l'ajout aux favoris de l'utilisateur
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const handleGenerateId = (filmId) => {
    addFavoriteMovies(currentUser?.userID, filmId);
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
              {dataMovieTest?.map((movie, index) =>
                movie?.backdrop_path ? (
                  <CommonRowItem
                    key={index}
                    movie={movie}
                    customImgUrl={movie?.backdrop_path}
                    filmTitle={movie?.title}
                    filmDescription={movie?.overview}
                    filmDuration
                    filmNotation={(movie?.vote_average).toFixed(1)}
                    filmDate={movie?.release_date?.substring(0, 4) ?? ""}
                    filmAge
                    onItemClick={() =>
                      handleItemClick(movie?.title, movie?.genre_ids)
                    }
                    idGenerate={() => handleGenerateId(movie?.id)}
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
