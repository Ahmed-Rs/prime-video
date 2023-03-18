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
import CommonRowItem from "./CommonRowItem";

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
                  <CommonRowItem
                    key={index}
                    movie={movie}
                    customUrl={movie?.backdrop_path}
                  />
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
