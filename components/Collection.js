/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState, lazy } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";

export default function Collection() {
  // State qui détermine l'elm html à afficher
  const [showImage, setShowImage] = useState(true);
  // State qui détecte le changement d'item du carousel pour redémarrer l'animation du showImage
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  // Conditionnement de lancement du trailer à la taille de l'écran
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    // Si écran assez grand on lance la logique de diffusion image/video
    if (!isSmallScreen) {
      let intervalId = setTimeout(() => {
        setShowImage(false);
      }, 2000);
      let intervalId2 = setTimeout(() => {
        setShowImage(true);
      }, 34000);
      // console.log("int2 :", intervalId2);
      return () => {
        clearTimeout(intervalId);
        clearTimeout(intervalId2);
      };
    } else setShowImage(true);
  }, [currentItemIndex, isSmallScreen]);

  const onChange = (index) => {
    setCurrentItemIndex(index);
    setShowImage(true);
  };
  // console.log(currentItemIndex);

  return (
    <div>
      <div className="collection_superhero my-0 mx-auto relative overflow-hidden ">
        <div className="superhero_intern my-0 mx-auto w-full max-w-[1600px] overflow-hidden outline-0 ">
          <div className="coll_banner_list">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={35000}
              infiniteLoop={true}
              onChange={onChange}
            >
              <div>
                {showImage ? (
                  <a className="collection_poster block" href="">
                    <picture>
                      <img src="\welcome\ryan.webp" alt="" />
                    </picture>
                  </a>
                ) : (
                  <>
                    {/* Ajout de l'image pour maintenir la height du Carousel et l'empêcher de tomber à zéro */}
                    <a className="collection_poster block opacity-0" href="">
                      <picture>
                        <img src="\welcome\ryan.webp" alt="" />
                      </picture>
                    </a>
                    <div className="video_overlay absolute top-0 w-full h-full">
                      <div className="video_overlay_container relative flex justify-between w-full h-full">
                        <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                          <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                            Jack Ryan de Tom Clancy - Saison 3
                          </h1>
                          <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                            <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                              Dans la saison 3 de Jack Ryan de Tom Clancy, Jack
                              fait une course contre la montre à travers
                              l'Europe pour empêcher un complot au sein du
                              gouvernement Russe, qui veut restaurer l'empire
                              soviétique et démarrer une Troisième Guerre
                              Mondiale.
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
                            autoPlay={true}
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
                  </>
                )}
              </div>

              <div>
                {showImage ? (
                  <a className="collection_poster block" href="">
                    <picture>
                      <img src="\welcome\ryan.webp" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Jack Ryan de Tom Clancy - Saison 3
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            Dans la saison 3 de Jack Ryan de Tom Clancy, Jack
                            fait une course contre la montre à travers l'Europe
                            pour empêcher un complot au sein du gouvernement
                            Russe, qui veut restaurer l'empire soviétique et
                            démarrer une Troisième Guerre Mondiale.
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
                          src="https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/b93a/bff8/0066/4571-a271-23a0c88cd6aa/52fe9395-4a62-4dae-9c68-a22acf93fa2f_video_720p_2500kbps_audio_aaclc_128kbps.mp4"
                          preload="auto"
                          autoPlay={true}
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
                )}
              </div>
              <div>
                {showImage ? (
                  <a className="collection_poster block" href="">
                    <picture>
                      <img src="\welcome\ryan.webp" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Jack Ryan de Tom Clancy - Saison 3
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            Dans la saison 3 de Jack Ryan de Tom Clancy, Jack
                            fait une course contre la montre à travers l'Europe
                            pour empêcher un complot au sein du gouvernement
                            Russe, qui veut restaurer l'empire soviétique et
                            démarrer une Troisième Guerre Mondiale.
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
                          src="https://avodmp4s3ww-a.akamaihd.net/ww_iad/1f44/5b4d/2f01/422c-8807-5b2d9eb1c8e1/07d5159f-be60-436e-b288-0a4f9196d29d_video_720p_2500kbps_audio_aaclc_128kbps.mp4"
                          preload="auto"
                          autoPlay={true}
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
                )}
              </div>
              <div>
                {showImage ? (
                  <a className="collection_poster block" href="">
                    <picture>
                      <img src="\welcome\ryan.webp" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Jack Ryan de Tom Clancy - Saison 3
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            Dans la saison 3 de Jack Ryan de Tom Clancy, Jack
                            fait une course contre la montre à travers l'Europe
                            pour empêcher un complot au sein du gouvernement
                            Russe, qui veut restaurer l'empire soviétique et
                            démarrer une Troisième Guerre Mondiale.
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
                          autoPlay={true}
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
                )}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
