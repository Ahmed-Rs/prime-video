/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "@trendyol-js/react-carousel";
// import { Carousel } from "react-responsive-carousel";
import { createElement } from "react";

const wrapperNode = (toWrap, wrapper) => {
  wrapper = wrapper || createElement("div", toWrap);
  // return wrapper.appendChild(toWrap);
};

export default function CommonRow({ title, pt, titleAlign, props }) {
  wrapperNode();

  return (
    <div className={`u_collect relative text-white pb-6` + ` ` + pt}>
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
        <div className="card_carousel_container relative mb-[-43px]">
          {/* PENSER A UTILISER LE MEME SCROLL EFFECT QUE BANS NETFLIXAPP */}
          <Carousel
            // show={3.5}
            slide={3}
            swiping={true}
            leftArrow={true}
            rightArrow={true}
            useArrowKeys={true}
            // responsive={true}
          >
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal relative ">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev relative inline-block align-top w-full h-full">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/jackryan.jpg" alt="" />
                    </picture>
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <h2>Here is the description</h2>
                  </div>
                  <div>
                    <p>And here the title</p>
                  </div>
                  <div>And there the logos</div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
