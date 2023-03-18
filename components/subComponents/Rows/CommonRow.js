/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import {
  useTrendingList,
  useSearchMovie,
  useSearchMovieById,
  useGenreMovieList,
  useSearchTvById,
} from "../../../utils/hooksApi";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../utils/config";

function CommonRowItem({ movie }) {
  const [hovered, setHovered] = useState(false);
  const [trailerSetter, setTrailerSetter] = useState(false);
  // Définiton de la durée du trailer
  const trailerTimer = 25;
  // Handling card hovering event
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Application du trailerTimer sur trailerSetter pour faire réapparaitre le backdrop dès la fin de la vidéo
  useEffect(() => {
    if (hovered) {
      setTrailerSetter(true);
      const trailerLunch = setTimeout(() => {
        setTrailerSetter(false);
      }, `${trailerTimer}000`);

      return () => {
        clearTimeout(trailerLunch);
      };
    } else {
      setTrailerSetter(false);
    }
  }, [hovered]);

  return (
    <div
      className="cont_rev relative inline-block align-top  "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="reveal overflow-hidden">
        <div className="capsule w-full h-full">
          <a href="#" className="cursor-pointer ">
            {!trailerSetter ? (
              <picture>
                <img
                  className="object-cover w-full rounded-[3px] hover:rounded-none"
                  src={`${IMAGE_URL}/original${movie?.backdrop_path}`}
                  alt=""
                />
              </picture>
            ) : (
              <div className="yt_trailer_container cursor-pointer pointer-events-none">
                <iframe
                  className="w-full h-full cursor-pointer"
                  src={`https://www.youtube.com/embed/iodVxRHMNqc?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&end=${trailerTimer}&rel=0`}
                  title="Predator | #TBT Trailer | 20th Century FOX"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </a>
        </div>
        <div className="desc relative">
          <div className="w-full h-full">
            <div className="my-3">
              <div className="flex items-center justify-between">
                <a
                  className="flex items-center shrink grow overflow-hidden text-xs "
                  href=""
                >
                  <div className="grow-0 shrink-0 w-9 h-9  ">
                    <img src="/welcome/play-3-32.png" alt="" />
                  </div>
                  <div className="flex flex-col overflow-hidden ">
                    <span>Lecture</span>
                    <div className="py-1 px-0">
                      <div
                        className="bg-[hsla(0,0%,100%,.2)] h-[3px] w-full max-w-[90px] absolute "
                        role="progressbar"
                      >
                        <div className="w-[86%] bg-[#00a0d6] h-[3px] text- "></div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="flex justify-around shrink grow text-xs cursor-default">
                  <div className="inline-block align-bottom cursor-default">
                    <span className="relative cursor-pointer inline-block ">
                      <img
                        className="object-cover"
                        src="/welcome/play-card-arrow-2.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="inline-block  align-bottom cursor-default">
                    <span className="relative cursor-pointer inline-block ">
                      <img
                        className="object-cover"
                        src="/welcome/card-add-plus.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="inline-block  align-bottom cursor-default">
                    <span className="relative cursor-pointer inline-block ">
                      <img
                        className="object-cover"
                        src="/welcome/remove-favorite.png"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
              <div className="text-[#00a8e1] text-sm font-bold ">
                <span>Inclus avec Amazon Prime</span>
              </div>
            </div>
            <div className="my-3">
              <div>
                <h3 className="block text-15 font-bold mb-1 ">
                  The Man In The High Castle
                </h3>
                <p className="card_resume">
                  Ce film minutieusement composé dissèque le Troisième Reich
                  avec une lâme aigue et analytique tout en montrant la carrière
                  insolite de Hitler, sa maitrise de la psychologie de masse,
                  son génie manipulateur et séduisant.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="mt-3 leading-6 whitespace-normal ">
                <div className="film_duration inline-block text-[#f2f4f6] text-[12px] mr-4">
                  2h35min
                </div>
                <div className="film_date inline-block text-[#f2f4f6] text-[12px] mr-4">
                  1977
                </div>
                <div className="film_subtitles inline-block whitespace-nowrap mr-4 align-bottom ">
                  <span className="inline-block text-[#f2f4f6]">
                    <img
                      className="inline-block"
                      src="/welcome/film-subs-4.png"
                      alt=""
                    />
                  </span>
                </div>
                <div className="film_age_limit inline-block whitespace-nowrap m-0">
                  <span className="inline-block text-[13px] ">
                    <span className="flex justify-center items-center px-1 text-[#f2f4f6] border border-[#f2f4f6] leading-5">
                      13 +
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommonRow({ title, pt, titleAlign, props }) {
  // Search by query
  const [dataMovie, setDataMovie] = useState(null);
  // const [hovered, setHovered] = useState(false);
  // let { query } = useParams();
  // const data = useSearchMovie("interstellar");
  // useEffect(() => {
  //   setDataMovie(data);
  // }, [data]);
  // console.log(dataMovie);

  // const data = useGenreMovieList();
  // useEffect(() => {
  //   setDataMovie(data);
  // }, [data]);
  // console.log(dataMovie);

  // let data;
  // useEffect(() => {
  //   setDataM(dat);
  // }, [dat]);
  // console.log(dataM);
  // useEffect(() => {
  //   setDataMovie(data);
  // }, [data]);
  // console.log(dataMovie);

  // const data = useSearchMovieById();
  // useEffect(() => {
  //   setDataMovie(data);
  // }, [data]);
  // console.log(dataMovie);

  // const data = useSearchMovieById();
  // useEffect(() => {
  //   setDataMovie(data);
  // }, [data]);
  // console.log(dataMovie);

  // const listData = listBulk[0]?.results;
  const listData = useTrendingList();
  console.log(listData);

  useEffect(() => {
    setDataMovie(listData);
  }, [listData]);
  console.log(dataMovie);

  // // Handling card hovering event
  // const handleMouseEnter = () => {
  //   setHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setHovered(true);
  // };

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
      {/* display:> ytp-chrome-top (titre) ;;  .ytp-button (boutton central)  ;; ytp-watermark (lien vers yt ;; ytp-pause-overlay(suggestion fin vid)  */}
      {/* Ne pas inspecter élément pour voir la vidéo en 100 x 100px */}
      <div className="inline-block max-w-[100px] max-h-[100px]">
        {/* <YouTube videoId="DlGIWM_e9vg" opts={videoOpts} className="max-w-[100px] max-h-[100px]" /> */}
      </div>
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
              {dataMovie?.map((movie, index) =>
                movie?.backdrop_path ? (
                  <CommonRowItem key={index} movie={movie} />
                ) : (
                  <div key={index} className="hidden"></div>
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
