/* eslint-disable react/no-find-dom-node */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import {
  useDiscoverMovie,
  // useGetMovieImages,
  useTrendingList,
} from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";
import CommonRowItem from "./CommonRowItem";
// import YouTube from "react-youtube";

export default function DoubleRow({ title, pt, titleAlign, props }) {
  const [discoverData, setDiscoverData] = useState([]);
  const mappedArray = [];

  // const dataMovie = useTrendingList();
  const dataMovie = useDiscoverMovie();
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
                    customUrl={double[0]?.poster_path}
                    trailerSetterBis={false}
                  />
                  <CommonRowItem
                    customUrl={double[1]?.poster_path}
                    trailerSetterBis={false}
                  />

                  {/* <div className="cont_rev toXr relative block align-top ">
                    <div className="reveal ">
                      <div className="capsule w-full h-full">
                        <a href="">
                          <picture>
                            <img
                              className="object-cover w-full rounded-[3px] hover:rounded-none "
                              src={`${IMAGE_URL}/original${double[0]?.poster_path}`}
                              alt=""
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="desc relative">
                        <div className="w-full h-full">
                          <div className="my-2">
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
                                      src="/welcome/card-add-plus.png"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="my-1">
                            <div className="text-[#00a8e1] text-sm font-bold ">
                              <span>Prime</span>
                            </div>
                          </div>
                          <div className="my-1">
                            <div>
                              <h3 className="block text-15 font-bold mb-1 ">
                                The Man In The High Castle
                              </h3>
                              <p className="card_resume">
                                Ce film minutieusement composé dissèque le
                                Troisième Reich avec une lâme aigue et
                                analytique tout en montrant la carrière insolite
                                de Hitler, sa maitrise de la psychologie de
                                masse, son génie manipulateur et séduisant.
                              </p>
                            </div>
                          </div>
                          <div className="mt-1">
                            <div className="mt-1 leading-6 whitespace-normal ">
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
                  <div className="cont_rev toXr relative block align-top ">
                    <div className="reveal ">
                      <div className="capsule w-full h-full">
                        <a href="">
                          <picture>
                            <img
                              className="object-cover w-full rounded-[3px] hover:rounded-none "
                              src={`${IMAGE_URL}/original${double[1]?.poster_path}`}
                              alt=""
                            />
                          </picture>
                        </a>
                      </div>
                      <div className="desc relative">
                        <div className="w-full h-full">
                          <div className="my-2">
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
                          <div className="my-1">
                            <div className="text-[#00a8e1] text-sm font-bold ">
                              <span>Prime</span>
                            </div>
                          </div>
                          <div className="my-1">
                            <div>
                              <h3 className="block text-15 font-bold mb-1 ">
                                The Man In The High Castle
                              </h3>
                              <p className="card_resume">
                                Ce film minutieusement composé dissèque le
                                Troisième Reich avec une lâme aigue et
                                analytique tout en montrant la carrière insolite
                                de Hitler, sa maitrise de la psychologie de
                                masse, son génie manipulateur et séduisant.
                              </p>
                            </div>
                          </div>
                          <div className="mt-1">
                            <div className="mt-1 leading-6 whitespace-normal ">
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
                  </div> */}
                </div>
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
