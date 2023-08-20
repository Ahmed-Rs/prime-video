/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import {
  useTrendingList,
  useMovieSelector,
  useGenreMovieList,
} from "../../../utils/hooksApi";
import Link from "next/link";

// const genreMovies = [
//   {
//     id: 28,
//     name: "Action",
//   },
//   {
//     id: 12,
//     name: "Adventure",
//   },
//   {
//     id: 16,
//     name: "Animation",
//   },
//   {
//     id: 35,
//     name: "Comedy",
//   },
//   {
//     id: 80,
//     name: "Crime",
//   },
//   {
//     id: 99,
//     name: "Documentary",
//   },
//   {
//     id: 18,
//     name: "Drama",
//   },
//   {
//     id: 10751,
//     name: "Family",
//   },
//   {
//     id: 14,
//     name: "Fantasy",
//   },
//   {
//     id: 36,
//     name: "History",
//   },
//   {
//     id: 27,
//     name: "Horror",
//   },
//   {
//     id: 10402,
//     name: "Music",
//   },
//   {
//     id: 9648,
//     name: "Mystery",
//   },
//   {
//     id: 10749,
//     name: "Romance",
//   },
//   {
//     id: 878,
//     name: "Science Fiction",
//   },
//   {
//     id: 10770,
//     name: "TV Movie",
//   },
//   {
//     id: 53,
//     name: "Thriller",
//   },
//   {
//     id: 10752,
//     name: "War",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ];

export default function CommonRow({ title, pt, titleAlign, props }) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [localData, setLocalData] = useState([]);
  const type = "tv";

  // Les ids des genres diffèrent même pour un même genre suivant que type "movie" ou "tv"
  const dataGenres = useGenreMovieList(type);
  useEffect(() => {
    dataGenres?.length ? setGenreMovies(dataGenres) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGenres?.length]);
  // console.log("dataGenres :", dataGenres);
  // console.log("Catégories : ", dataGenres);

  // On fetch les données depuis le fichier local
  const getLocalData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLocalData(data.categories));
  };

  // useEffect sinon rendu infini
  useEffect(() => {
    getLocalData();
  }, []);
  // console.log("localData :", localData);

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
      <div className="u_coll_container ">
        <div className="title_container mx-12 mb-2 leading-6">
          <div className="pe7 flex items-center">
            <div className="logo_container">
              <span>
                <img
                  fill
                  className="pr-4"
                  src="/welcome/prime-logo-large-v4.png"
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
              {/* <Link className="text-xs text-[#79b8f3] mt-[2px]" href="/">
                Modifier
              </Link> */}
            </div>
          </div>
          <div></div>
        </div>
        <div className="card_carousel_container">
          <div className="category__row">
            <ScrollingCarousel>
              {localData.map((category, id) => (
                <div
                  key={id}
                  className="cont_rev categ_h0cP relative inline-block align-top "
                >
                  <div className="reveal">
                    <div className="capsule w-full h-full">
                      <Link className="" href={category.path}>
                        <div className="">
                          <picture className="relative">
                            <img
                              className="object-cover w-full rounded-[3px] hover:rounded-none "
                              src={category.picture}
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="absolute bottom-0 ">
                          <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                            {category.name}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
