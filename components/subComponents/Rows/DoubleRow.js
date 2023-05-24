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
  useTrendingList,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";
import { useRouter } from "next/router";

export default function DoubleRow({ title, pt, titleAlign }) {
  const [discoverData, setDiscoverData] = useState([]);
  const router = useRouter();
  const mappedArray = [];
  const type = "movie";
  const filter = "popular";
  const dataMovie = useMovieSelector(type, filter);
  // Explication de la logique des dépendances de ce useEffect dans le <CommonRow />
  useEffect(() => {
    dataMovie.length ? setDiscoverData(dataMovie) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMovie.length]);
  for (let i = 0; i < discoverData?.length - 1; i += 2) {
    if (discoverData[i + 1] !== discoverData[i]) {
      mappedArray?.push([discoverData[i], discoverData[i + 1]]);
    }
  }

  const handleItemClick = (filmTitle, genreIds) => {
    // Redirection vers la page du film
    router.push(`/filmPath/${filmTitle}?genreIds=${genreIds}`);
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
                      handleItemClick(double[0]?.title, double[0]?.genre_ids)
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
                      handleItemClick(double[1]?.title, double[1]?.genre_ids)
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
