/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { IMAGE_URL } from "../../../utils/config";

export default function CommonRowItem({
  movie,
  customImgUrl,
  trailerSetterBis = true,
  onItemClick,
  genreIds,
}) {
  const [hovered, setHovered] = useState(false);
  const [trailerSetter, setTrailerSetter] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);
  // Définiton de la durée du trailer
  const trailerTimer = 25;
  // Handling card hovering event
  const handleMouseEnter = () => {
    const newTimer = setTimeout(() => {
      setHovered(true);
    }, 2000);
    setHoverTimer(newTimer);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
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
      className="cont_rev toXr relative inline-block align-top  "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onItemClick}
    >
      <div className="reveal overflow-hidden">
        <div className="capsule w-full h-full">
          <a href="#" className="cursor-pointer ">
            {!trailerSetter && trailerSetterBis ? (
              <picture>
                <img
                  className="object-cover w-full rounded-[3px] hover:rounded-none"
                  src={`${IMAGE_URL}/original${customImgUrl}`}
                  alt=""
                />
              </picture>
            ) : trailerSetter && trailerSetterBis ? (
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
            ) : (
              <picture>
                <img
                  className="object-cover w-full rounded-[3px] hover:rounded-none"
                  src={`${IMAGE_URL}/original${customImgUrl}`}
                  alt=""
                />
              </picture>
            )}
          </a>
        </div>
        <div className="desc relative">
          <div className="w-full h-full">
            <div className="descMx my-3">
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
            <div className="descLgMY my-2">
              <div className="text-[#00a8e1] text-sm font-bold ">
                <span>Inclus avec Amazon Prime</span>
              </div>
            </div>
            <div className="desTlMy my-3">
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
            <div className="descPresMt mt-3">
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
