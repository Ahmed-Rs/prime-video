/* eslint-disable react/no-find-dom-node */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import {
  useDiscoverMovie,
  useMovieSelector,
  // useGetMovieImages,
  useTrendingList,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";

export default function DoubleRow({ title, pt, titleAlign, props }) {
  const [discoverData, setDiscoverData] = useState([]);
  const mappedArray = [];
  const type = "movie";
  const filter = "popular";

  const dataMovie = useMovieSelector(type, filter);
  // const dataMovie = useDiscoverMovie();
  // Explication de la logique des dépendances de ce useEffect dans le <CommonRow />
  useEffect(() => {
    dataMovie.length ? setDiscoverData(dataMovie) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMovie.length]);
  // console.log("discoverData", discoverData);
  for (let i = 0; i < discoverData?.length - 1; i += 2) {
    if (discoverData[i + 1] !== discoverData[i]) {
      mappedArray?.push([discoverData[i], discoverData[i + 1]]);
    }
  }
  // console.log("mappedArray : ", mappedArray);

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
              {mappedArray?.map((double, id) => (
                <div key={id} className="double_card inline-block ">
                  <CommonRowItem
                    customImgUrl={double[0]?.poster_path}
                    trailerSetterBis={false}
                  />
                  <CommonRowItem
                    customImgUrl={double[1]?.poster_path}
                    trailerSetterBis={false}
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
