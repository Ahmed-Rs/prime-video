/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
// import { Carousel } from "react-responsive-carousel";
import { createElement } from "react";

const wrapperNode = (toWrap, wrapper) => {
  wrapper = wrapper || createElement("div", toWrap);
  // return wrapper.appendChild(toWrap);
};

export default function CommonRow({ title, pt, titleAlign, props }) {
  wrapperNode();

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
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
        {/* Astuce à revoir: on enlève mb-[-43px] à une div interne (dont la height ne bougera pas) et cela va impacter la height d'une div plus hautement située dans le code : à NOTER DANS NOTION */}
        <div className="card_carousel_container">
          <div className="">
            <ScrollingCarousel>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
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
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont_rev relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <picture>
                        <img
                          className="object-cover w-full rounded-[3px] hover:rounded-none "
                          src="/film-data/high-castle.jpg"
                          alt=""
                        />
                      </picture>
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
                            Ce film minutieusement composé dissèque le Troisième
                            Reich avec une lâme aigue et analytique tout en
                            montrant la carrière insolite de Hitler, sa maitrise
                            de la psychologie de masse, son génie manipulateur
                            et séduisant.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mt-3 leading-6 whitespace-normal ">
                          <div className="film_duration inline-block text-[#f2f4f6] text-[13px]">
                            2h35min
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollingCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
