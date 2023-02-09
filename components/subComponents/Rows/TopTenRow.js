/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";
import { Carousel } from "react-responsive-carousel";

export default function TopTenRow({ title, pt, titleAlign, props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [globalData, setGlobalData] = useState([]);
  // On fetch les données depuis le data.json local
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setGlobalData(data));
  };

  // useEffect sinon rendu infini
  useEffect(() => {
    getData();
  }, []);

  // console.log(globalData);

  // Fonction qui adapte le poster a la card
  // On récupère l'index de la card "en cours", qui s'affiche
  const handlePosterAdapt = (item) => {
    const usingIndex = globalData.indexOf(item);
    setCurrentIndex(usingIndex);
    console.log(usingIndex);
  };

  return (
    <div tabIndex={0} className={`u_collect text-white pb-6` + ` ` + pt}>
      <div>
        <div className="u_coll_container relative flex flex-col">
          <div className="presenter_container flex justify-between h-full w-[50vw] z-10">
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
                {/* TITLE */}
                <h3 className="m-0 mb-[10px] text-[32px] leading-9">
                  {globalData[currentIndex]?.title}: Season 1
                </h3>
                <div>
                  <div className="flex items-center mb-6">
                    {/* TYPE */}
                    <span className="mr-[10px] text-[17px] ">
                      {globalData[currentIndex]?.type}
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
            {/* Enlever le hidden pour rendre visible */}
            <a className=" min-w-[1044px] " href="">
              {/* POSTER */}
              <img
                className="h-full w-full object-cover "
                src={globalData[currentIndex]?.poster}
                alt=""
              />
            </a>
            <div className="degrad_1 absolute left-[-6px] right-0 bottom-0 top-0 h-full w-full "></div>
            <div className="degrad_2 absolute top-0 right-0 bottom-0 left-0 "></div>
            <div className="sub_vid_container absolute top-0 right-0 h-full w-full max-h-[453px] max-w-[815px] min-w-[500px] ">
              <a
                // Enlever opacity-0 pour rendre visible
                className="inline-block overflow-hidden absolute h-full w-full top-0 right-0 bottom-0 left-0 z-0 opacity-0 bg-[#000]  "
                href=""
              >
                <video
                  className="relative top-[50%] max-h-full w-full object-cover translate-y-[-50%] z-[1] "
                  src=""
                ></video>
                <div className=" inline-block absolute top-10 right-10 cursor-pointer z-[1]">
                  <button className="sound_btn border-none cursor-pointer overflow-visible ">
                    <img src="/welcome/mute-2-32.png" alt="" />
                  </button>
                </div>
                <div className="degrad_vid_1 absolute top-0 right-0 bottom-0 left-[-6px] z-[1]  "></div>
                <div className="degrad_vid_2 absolute top-0 right-0 bottom-0 left-0 z-[1] "></div>
              </a>
            </div>
          </div>
          <div className="card_carousel_container">
            <div className="top_ten_row">
              <ScrollingCarousel>
                {globalData &&
                  globalData.length &&
                  globalData.map((item, id) => {
                    return (
                      <div
                        key={id + 10}
                        className="cont_rev relative inline-block align-top "
                        onClick={() => handlePosterAdapt(item)}
                      >
                        <div className="reveal flex">
                          <div className="capsule_number flex flex-col font-black justify-end text-center text-[45px] min-w-[58px] ">
                            <span className="mb-[-10px]">{id + 1}</span>
                          </div>
                          <div className="capsule w-full h-full">
                            <a className="pointer-events-none " href="#">
                              <picture>
                                <img
                                  className="object-cover w-full rounded-[3px] hover:rounded-none "
                                  src={item.picture}
                                  alt=""
                                />
                              </picture>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </ScrollingCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
