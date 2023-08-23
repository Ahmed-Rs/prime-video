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
                      <img src="\welcome\madmax.webp" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Mad Max: Fury Road
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            George Miller, créateur et génie du genre
                            post-apocalyptique au cinéma, mieux connu pour la
                            série légendaire des Mad Max, nous livre enfin la
                            suite de la saga de Max Rockatansky avec Mad Max :
                            Fury Road. Hanté par son passé turbulent, Mad Max
                            (Tom Hardy) estime que le meilleur moyen de survivre
                            est de chercher seul sa fortune. Cela ne l'empêche
                            pas de se retrouver embarqué par un groupe qui
                            tra...
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
                          className="relative object-cover right-0 h-full max-h-full min-w-[45vw] "
                          src="https://s3-dub-ww.cf.trailer.row.aiv-cdn.net/7cc5/e160/b9e1/44b0-9348-68031fdf48b7/2c7d490b-372d-464c-8590-f79f298ba8c1_video_900_audio_aaclc_128.mp4?Expires=1692831264&Signature=eDhqdHpgp3PhZ6M8Z5cZuJEviSK9VZ9RYH1EvDD6IZEYMqA~QeB2KfroKwDRbIlLtu1eUJ0jHx7VzX~aStrKbtUZUy-XNn-7vozq2y0G~cenPXluMwZIXzoP6danqsUDt2M6qhruCqFZWHYMEts6Gdldcd0orpyt8pz~9wiAw6Z3rKmvTFzIEBZBqvUA0oUrEgEbG6SZ9sMUzPV8L4uttNg1kyFB1gAZhSVpjFhQR5z~qxxCR9ZV3P53m9pZQCCaGBAdv5MjiLEa~oyiiQwhwm3bCmkYmfvxro-AECOQsw2-bkEWSFwb06fBrU4cbCYr6OMxbAaxUXrsC3BrXhgEoA__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
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
                <a className="collection_poster block" href="">
                  <picture>
                    <img src="\welcome\actions.jpg" alt="" />
                  </picture>
                </a>
              </div>

              <div>
                {showImage ? (
                  <a className="collection_poster block" href="">
                    <picture>
                      <img src="\welcome\predator.jpg" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Predator
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            Une équipe de commandos en mission dans la jungle
                            d'Amérique centrale se retrouve traquée par un
                            guerrier extraterrestre.
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
                          className="relative object-cover right-0 h-full max-h-full min-w-[45vw] "
                          src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/d18c/5242/20f4/4288-8a54-c28299a77bbd/5832fd90-ae93-40ad-a21d-b7c6dbcf8133_video_900_audio_aaclc_128.mp4?Expires=1692829688&Signature=DsSg7Q-vfFkgxwkKJolTtolQzq8nsAGhG74NHv36~fHI5osChH9H21F87-9Gg-rEN2gYROEKlage55fBfiE4~Dd0JURf3hESA1XnFNPexy~k37WylsKyYC05anVwuaSmWJCCchD1B-6SOXj3VifIq27yrPJyDDGHDmXsLDFDt8poOg26mFPfc-c6KF2sCQDi2vWZOy3ky6Zg8Uf5Mg175Bgsg6Cv7ET1IaEI-qRL3tuEUn3vTkChxemNOsne3R48gIeoz49mlopWajHfW1T5AJ9PkgFfeUhWRniNyp5Al54kUU1KGskI-0L5cGERRXKTbqXFE4qmzNTFbZP3s6D~mg__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
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
                      <img src="\welcome\transformers.jpg" alt="" />
                    </picture>
                  </a>
                ) : (
                  <div className="video_overlay absolute top-0 w-full h-full">
                    <div className="video_overlay_container relative flex justify-between w-full h-full">
                      <div className="video_overlay_info pl-12 h-full w-vidInfoWidth">
                        <h1 className="video_overlay_title text-xl font-normal text-left mt-7 mb-2 mx-0 ">
                          Transformers - La face cachée de la Lune
                        </h1>
                        <div className="video_overlay_description_container flex flex-row flex-wrap mb-3 overflow-hidden">
                          <span className="video_overlay_description leading-5 text-14 text-justify text-gray-400 ">
                            Un événement mystérieux lié à notre passé éclate au
                            grand jour. C’est la guerre qui menace aujourd’hui
                            notre Terre ; une guerre d’une telle ampleur que
                            l’aide des Transformers pourrait, cette fois, ne pas
                            suffire à nous sauver.
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
                          src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/c98c/64c2/088e/4454-83a6-d22c3eff0af4/5dbdbcea-1c17-4a22-a723-8ae0928d1190_video_900_audio_aaclc_128.mp4?Expires=1692828667&Signature=c1naUqyv8elqZX-0ngjQO4KKN4aJY~-pzZIaJO9Afegm55rF6IFgJNXW-5IoEMKMYUvPs65iKWbh2Kbs0dsoiWl8CoDRsWri7CCYnV0zPxYkFL0nc1ZxATu0lZOnzheT2lWAWW1qBDUvfxK7iaAh7Tymf0SvWqn9K7ENa9RZFuqbo70hIWYJ6kuNtE8gl985IErOB~QwATZdUGtfi76-H-iqyDVtjZqn86ZCEC~5gNNM0ZseyRtlnsbrOsk0lKL7lVpW7YvATPfXTVH6HP5sXZ3mr3urxipwyes2e867TJfGyUhqPQQXM-WBbF~Z5q2uUOcBxmhsN44w7gXnM2Nftg__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
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
