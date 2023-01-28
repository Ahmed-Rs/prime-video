/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import { Carousel } from "react-responsive-carousel";

const wrapperNode = (toWrap, wrapper) => {
  wrapper = wrapper || createElement("div", toWrap);
  // return wrapper.appendChild(toWrap);
};

export default function TopTenRow({ title, pt, titleAlign, props }) {
  wrapperNode();

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
      <div>
        <div className="u_coll_container relative flex flex-col">
          <div className="presenter_container flex justify-between h-full w-[50vw]">
            <div className="presenter_inter flex flex-col justify-between ml-[108px] min-h-[450px] py-[44px] ">
              <div className="top_title">
                <div className="relative m-0 leading-6  ">
                  <div className="flex flex-col">
                    <div className="inline-block ml-0 mt-2 ">
                      <span>
                        <img
                          className="mr-0 h-6 leading-6 align-bottom  "
                          src="/welcome/prime-logo-large-v4.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex justify-start mt-2">
                      <h2 className="text-[30px] leading-8 font-bold ">
                        Top 10 en France
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top_legend">
                <h3 className="m-0 mb-[10px] text-[32px] leading-9">
                  The Last Of Us: Season 1
                </h3>
                <div>
                  <div className="flex items-center mb-6">
                    <span className="mr-[10px] text-[17px] ">
                      Science-fiction, Drame, Fantastique
                    </span>
                    <span className="inline-flex justify-center items-center min-w-[22px] py-0 px-1 text-center text-[17px] align-middle border border-[rgba(129,151,164,.7)] color-[#8197a4] font-bold ">
                      <span className="h-[18px] leading-[18px]">18+</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <a
                      href=""
                      className="inline-flex items-center text-start bg-[#0f79af] text-white mr-2 mt-0 rounded-[999px] border-none text-[17px] leading-5 py-3 px-5 align-top "
                    >
                      <img src="welcome/play-3-32.png" alt="" />
                      <span className="ml-3 ">
                        <span>Lecture S.1 Ep.1</span>
                      </span>
                    </a>
                    <button className="inline-flex flex-col items-center justify-center w-12 h-12 mr-2  bg-[#425265] rounded-[50%] ">
                      <img src="/welcome/card-add-plus.png" alt="" />
                    </button>
                    <a
                      href=""
                      className="inline-flex flex-col items-center justify-center w-12 h-12 text-[#f2f4f6] bg-[#425265] rounded-[50%] "
                    >
                      <img className=" " src="/welcome/info-6-24.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="vid_container flex absolute top-0 right-0 h-full max-h-[592px] w-auto max-w-[1044px]">
            <a className=" min-w-[1044px]" href="">
              <img
                className="h-full w-full object-cover "
                src="/film-data/the-last-of-us.jpg"
                alt=""
              />
            </a>
            <div className="degrad_1 absolute left-[-6px] right-0 bottom-0 top-0 h-full w-full "></div>
            <div className="degrad_2 absolute top-0 right-0 bottom-0 left-0 "></div>
            <div className="sub_vid_container">
              <a href="">
                <video src=""></video>
                <div>
                  <button className="sound_btn"></button>
                </div>
              </a>
            </div>
          </div>
          {/* Astuce à revoir: on enlève mb-[-43px] à une div interne (dont la height ne bougera pas) et cela va impacter la height d'une div plus hautement située dans le code : à NOTER DANS NOTION */}
          <div className="card_carousel_container">
            <div className="top_ten_row">
              <ScrollingCarousel>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cont_rev relative inline-block align-top ">
                  <div className="reveal flex">
                    <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                      <span className="mb-[-10px]">1</span>
                    </div>
                    <div className="capsule w-full h-full">
                      <a href="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/hunters.jpg"
                            alt=""
                          />
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollingCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
