/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CommonRow({ title, pt, props }) {
  return (
    <div className={`u_collect text-white pb-6` + ` ` + pt}>
      <div className="u_coll_container ">
        <div className="title_container mx-12 mb-2 leading-6">
          <div className="pe7 flex">
            <div className="logo_container"></div>
            <div className="flexor flex justify-between ml-0 w-full">
              <h2 className="text-[19px] leading-6 p-0 font-bold">{title}</h2>
              <a className="text-xs text-[#79b8f3]" href="">
                Modifier
              </a>
            </div>
          </div>
          <div></div>
        </div>
        {/* Astuce à revoir: on enlève mb-[-48px] à une div interne (dont la height ne bougera pas) et cela va impacter la height d'une div plus hautement située dans le code : à NOTER DANS NOTION */}
        <div className="card_carousel_container mb-[-43px]">
          <Carousel useKeyboardArrows={true}>
            <div className="">
              {/* <div className="relative w-auto h-auto overflow-hidden rounded-[3px]"> */}
              <a href="">
                <picture>
                  <img src="/film-data/jackryan.jpg" alt="" />
                </picture>
              </a>
            </div>
            {/* </div> */}
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="film-data\anneaux-pouvoir.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\celebrity.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\chemins-liberte.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\dmz.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\faucon-noir.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\hawa.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\high-castle.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\la-route.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\manhunt.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\peacemaker.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="relative inline-block overflow-hidden align-top w-full h-full">
              <div className="relative w-auto h-auto overflow-hidden rounded-[3px]">
                <a href="">
                  <picture>
                    <img src="\film-data\vampire-academy.jpg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
