/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { createElement } from "react";

const wrapperNode = (toWrap, wrapper) => {
  wrapper = wrapper || createElement("div", toWrap);
  // return wrapper.appendChild(toWrap);
};

export default function ChannelRow({ title, pt, titleAlign, props }) {
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
          <div className="channel__row">
            <ScrollingCarousel>
              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="cont_rev categ_h0cP relative inline-block align-top ">
                <div className="reveal ">
                  <div className="capsule w-full h-full">
                    <a href="">
                      <div className="">
                        <picture>
                          <img
                            className="object-cover w-full rounded-[3px] hover:rounded-none "
                            src="/film-data/backdrops/paramount.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="absolute bottom-0 ">
                        <div className="absolute bottom-2 left-1 font-bold leading-[20px] ">
                          Documentaire
                        </div>
                      </div>
                    </a>
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
