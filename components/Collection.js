/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Collection() {
  return (
    <div>
      <div className="collection_superhero my-0 mx-auto relative overflow-hidden z-[1] ">
        <div className="superhero_intern my-0 mx-auto w-full max-w-[1600px] overflow-hidden outline-0 ">
          {/* <button
            className="coll_left_btn bg-transparent border-0 text-white cursor-pointer drop-shadow-[0_0_5px_#000] h-full m-0 p-[6px] absolute top-0 z-10"
            onClick={onPrevClick}
          >
            <div className="coll_left_img_btn w-[30px] h-[34px] bg-cover"></div>
          </button> */}

          <ul className="coll_banner_list">
            <Carousel showThumbs={false}>
              <div>
                <a className="hidden" href="">
                  <picture>
                    <img src="\welcome\ryan.webp" alt="" />
                  </picture>
                </a>
                <div className="video_overlay absolute top-0 w-full h-full opacity-1 z-5">
                  <div className="video_overlay_container realtive flex justify-between w-full h-full">
                    <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                      <h1 className="video_overlay_title text-2xl font-normal text-left mt-7 mb-2 mx-0 ">
                        Jack Ryan de Tom Clancy - Saison 3
                      </h1>
                      <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                        <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400">
                          Dans la saison 3 de Jack Ryan de Tom Clancy, Jack fait
                          une course contre la montre à travers l'Europe pour
                          empêcher un complot au sein du gouvernement Russe, qui
                          veut restaurer l'empire soviétique et démarrer une
                          Troisième Guerre Mondiale.
                        </span>
                      </div>
                      <div className="video_overlay_player_container">
                        <div className="video_overlay_buttons flex items-start  gap-2">
                          <a
                            className="flex p-3 gap-3 bg-[#0f79af] rounded-[3px]"
                            href=""
                          >
                            <img
                              className="max-w-[24px] inline-block h-6 "
                              src="/welcome/media-play-24.png"
                              alt=""
                            />
                            <span className="inline-block ">
                              <span className="text-14">Regarder</span>
                            </span>
                          </a>
                          <span className="p-3 shadow-videoPlay rounded-[3px]">
                            <button className="flex pl-3 ">
                              <span className="">
                                <img
                                  className="inline-block pt-[3px] max-w-[19px] max-h-[19px]"
                                  src="/welcome/plus-16.png"
                                  alt=""
                                />
                              </span>
                              <span className="inline-block w-[120px] pt-[2px] pl-3 text-14 text-left">
                                Liste de favoris
                              </span>
                            </button>
                          </span>
                          <a
                            className="p-3 shadow-videoPlay rounded-[3px]"
                            href=""
                          >
                            Détails
                          </a>
                        </div>
                      </div>
                    </div>
                    <a className="video_overlay_player inline-block absolute top-0 bottom-0 right-0 h-full w-fit ">
                      {/* relative object-cover right-0 max-h-full h-full */}
                      <video
                        className="relative object-cover right-0 h-full max-h-full "
                        src="https://5s3.lvlt.videorolls.row.aiv-cdn.net/prod/ww_dub/52e4/6366/0682/40be-a7d5-0a7cd3dc1a11/1d93ce11-04d8-4760-9564-9f5a7101c112_video_480p_900kbps_audio_aaclc_128kbps.mp4"
                        preload="auto"
                        autoPlay="true"
                        muted
                      ></video>
                      <div className="mutter_container">
                        <button>
                          <svg></svg>
                        </button>
                      </div>
                      <div className="bg-videoUnderlay absolute top-0 right-0 h-full w-full"></div>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <a href="">
                  <picture>
                    <img src="\welcome\destiny.webp" alt="" />
                  </picture>
                </a>
                <div className="video_overlay"></div>
              </div>

              <div>
                <a href="">
                  <picture>
                    <img src="\welcome\ryan.webp" alt="" />
                  </picture>
                </a>
                <div className="video_overlay"></div>
              </div>

              <div>
                <a href="">
                  <picture>
                    <img src="\welcome\ryan.webp" alt="" />
                  </picture>
                </a>
                <div className="video_overlay"></div>
              </div>
            </Carousel>
          </ul>
          {/* <button className="coll_right_btn bg-transparent border-0 text-white cursor-pointer drop-shadow-[0_0_5px_#000] h-full m-0 p-[6px] absolute top-0 right-0 z-10">
            <div className="coll_right_img_btn w-[30px] h-[34px] bg-cover"></div>
          </button> */}
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
