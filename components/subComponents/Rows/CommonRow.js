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
  // wrapperNode();
  const btnElm = useRef(null);
  const scroll = (scrollOffset) => {
    btnElm.current.scrollLeft += scrollOffset;
  };
  const onPrevClick = () => {
    scroll(-50);
  };
  const onNextClick = () => {
    scroll(50);
  };

  return (
    <div className={`u_collect text-white pb-6 ` + ` ` + pt}>
      <div className="u_coll_container">
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
        <div className="card_carousel_container flex " ref={btnElm}>
          {/* PENSER A UTILISER LE MEME SCROLL EFFECT QUE BANS NETFLIXAPP */}
          <button
            className="coll_btn coll_left_btn bg-transparent border-2 text-white cursor-pointer drop-shadow-[0_0_5px_#000] w-[45px] h-[180px] p-[6px] z-50 "
            onClick={() => scroll(-50)}
          >
            <div className="coll_left_img_btn w-[30px] h-[34px] bg-cover"></div>
          </button>
          <div className="container_2 flex mb-[20px]">
            <div className="cont_rev min-w-[280px] min-h-[150px]  p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
                  <div>And there are the logos</div>
                </div>
              </div>
            </div>
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
            <div className="cont_rev min-w-[280px] min-h-[150px] mb-020px p-1 object-contain inline-block">
              <div className="reveal">
                <div className="capsule w-auto h-auto rounded-[3px]">
                  <a href="">
                    <picture>
                      <img src="/film-data/high-castle.jpg" alt="" />
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
          </div>
          <button
            className="coll_btn coll_right_btn bg-transparent border-2 text-white cursor-pointer drop-shadow-[0_0_5px_#000] w-[45px] h-[180px] p-[6px]  z-50"
            onClick={() => onNextClick}
          >
            <div className="coll_right_img_btn w-[30px] h-[34px] bg-cover"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
