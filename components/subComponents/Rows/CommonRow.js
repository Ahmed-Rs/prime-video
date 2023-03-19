/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
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
  const [dataMovie, setDataMovie] = useState([]);
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

  // const rawData = useTrendingList();
  // console.log("rawData", rawData);

  // const listData = useMemo(() => rawData, [rawData]);
  // console.log("listData", listData);
  // // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (rawData && rawData.length > 0) {
  //     setDataMovie(rawData);
  //   }
  // }, [setDataMovie, rawData.length]);

  const listData = useTrendingList();

  console.log("listData", listData);
  // const [isLoading, setIsLoading] = useState(true);

  // Si on met listData en dépendance comme le conseil vsCode, on obtient un render infini et si on met un tableau vide on n'obtient pas de data non plus car listData n'est pas alimenté directement dès le premier render, il faut un 2e render.
  // Pour solutionner cela: dépendance: [listData.length] qui nous garanti que listData est alimenté en data et nous évite aussi un render infini.
  // Logique similaire dans le <DoubleRow />
  useEffect(() => {
    listData.length ? setDataMovie(listData) : "";
  }, [listData.length]);

  console.log("dataMovie", dataMovie);

  // const listData = useTrendingList();
  // // const [dataMovie, setDataMovie] = useState([]);
  // const [status, setStatus] = useState({ loading: true, error: false });

  // useEffect(() => {
  //   if (listData.length > 0) {
  //     setDataMovie(listData);
  //     setStatus({ loading: false, error: false });
  //   } else if (listData.length === 0 && !status.loading) {
  //     setStatus({ loading: false, error: true });
  //   }
  // }, [status.loading, setDataMovie, setStatus, listData.length]);
  // console.log("dataMovie", dataMovie);

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
