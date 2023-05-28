/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useMultiSearcher } from "../../../utils/hooksApi";
import { IMAGE_URL } from "../../../utils/config";

export default function PrimeSearchMain({ query, monFilm }) {
  const [imageVisible, setImageVisible] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  // const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    // Si écran assez grand on lance la logique de diffusion image/video
    if (!isSmallScreen) {
      let intervalId = setTimeout(() => {
        setImageVisible(false);
      }, 2000);
      let intervalId2 = setTimeout(() => {
        setImageVisible(true);
      }, 3000);
      return () => {
        clearTimeout(intervalId);
        clearTimeout(intervalId2);
      };
    } else setImageVisible(true);
  }, [isSmallScreen]);

  // // On fetch la data de l'Api en fonction de la query récupérée depuis l'URL
  // const dataTest = useMultiSearcher(query);
  // useEffect(() => {
  //   dataTest?.length ? setDataMovie(dataTest) : "";
  // }, [dataTest?.length]);

  // On conditionne le fetch à l'obtention d'un backdrop afin d'afficher une image comme dans <CommonRow />

  return monFilm?.media_type !== "person" ? (
    <div className="mb-[200px]">
      <div className="pSM__layout relative w-full max-w-[1550px] max-h-[80vh] m-auto pl-[20px]">
        <div className="pSM__container relative flex justify-between w-full h-full">
          <div className="pSM__description w-searchDescWidth max-w-[700px] inline-block pt-[60px] z-[2]">
            <div className="pSM__description__inner flex  justify-between">
              <div className="flex flex-col">
                <div className="mt-4 mb-6">
                  <h1 className="text-[36px] font-extrabold">
                    {monFilm?.media_type == "movie"
                      ? monFilm?.title
                      : monFilm?.name}
                  </h1>
                </div>
                <div className="film__description leading-5 text-14 text-justify text-gray-300 mb-3">
                  <div className="w-60%]">
                    <span>{monFilm?.overview}</span>
                  </div>
                </div>
                <div className="imdbiz mb-3 leading-5 text-14 text-justify text-gray-600 font-semibold ">
                  <div className="flex items-center justify-evenly ">
                    <div className="bg-white px-1 py-[.5px] mr-4 rounded-md">
                      IMDb {monFilm?.vote_average?.toFixed(1)}
                    </div>
                    <div className="bg-white px-1 py-[.5px] mr-4 rounded-md">
                      1 h 32 min
                    </div>
                    <div className="bg-white px-1 py-[.5px] mr-4 rounded-md">
                      {monFilm?.release_date?.substring(0, 4) ?? ""}
                    </div>
                    <div className="bg-white px-1 py-[.5px] mr-4 rounded-md ">
                      X-Ray
                    </div>
                    <div className="bg-white px-1 py-[.5px] mr-4 rounded-md">
                      16+
                    </div>
                  </div>
                </div>
                <div className="related__genres mb-3 leading-5 text-14 text-justify ">
                  <div className="flex justi items-center">
                    <p className="mr-4">Science-fiction</p>
                    <p className="mr-4">Horreur</p>
                    <p className="mr-4">Intense</p>
                    <p className="mr-4">Palpitant</p>
                  </div>
                </div>
                <div className="flex items-center mb-3 leading-5 text-14 text-justify">
                  <span className="mr-1">
                    <img
                      src="/film-data/pictures/icons/inclus-prime.png"
                      alt=""
                    />
                  </span>
                  <span className="mr-1">
                    <div>Inclus avec Amazon Prime</div>
                  </span>
                </div>
                <div className="choice__symbols__container mb-3 text-lg ">
                  <div className="flex flex-col ">
                    <div className="symbols-1 flex mb-5">
                      <div className="flex items-center">
                        <span className="mr-2 w-12 h-12 ">
                          <img
                            src="/welcome/play-3-64.png"
                            className=""
                            alt=""
                          />
                        </span>
                        <span className="mr-2 font-semibold">
                          <div>Lecture</div>
                        </span>
                      </div>
                      {/* <div className="flex flex-col justify-center text-sm bg-slate-400 p-2 "> */}
                      <div className="flex flex-col justify-center bg-gray-600 px-3 py-[.5px] mr-4 rounded-md  text-sm text-center tracking-wide">
                        <div className="flex">
                          <span className="whitespace-nowrap ">
                            Plus d'options
                          </span>
                        </div>
                        <span className="">d'achat</span>
                      </div>
                    </div>

                    <div className="symbols-2 flex justify-between">
                      <div className="flex flex-col items-center mr- ">
                        <div>
                          <img src="\welcome\film-24.png" alt="" />
                        </div>
                        <div className="text-center px-2">Bande-annonce</div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <div>
                          <img src="\welcome\cart-add-8-24.png" alt="" />
                        </div>
                        <div className="text-center px-2">Liste de favoris</div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <div>
                          <img src="\welcome\download-2-24.png" alt="" />
                        </div>
                        <div className="text-center px-2">Télécharger</div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <div>
                          <img src="\welcome\confetti-2-24.png" alt="" />
                        </div>
                        <div className="text-center px-2">Watch Party</div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <div>
                          <img src="\welcome\sharethis-5-24.png" alt="" />
                        </div>
                        <div className="text-center px-2">Partager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pSM__background absolute top-0 right-0 w-searchImgWidt w-fi inline-block z-0">
            <div
              className={`pSM__background__img  ${
                imageVisible ? "pSMVisible" : "pSMInvisible"
              }`}
            >
              <img
                src={`${IMAGE_URL}/w500/${monFilm?.backdrop_path}`}
                className="w-[850px] h-[450px] object-cover "
                alt=""
              />
            </div>

            {/* <div
                className={`pSM__background__vid w-full  h-full ${
                  imageVisible ? "pSMInvisible" : "pSMVisible"
                }`}
              >
                <img
                  src="\film-data\backdrops\chemin-liberte.jpg"
                  className="w-full object-contain "
                  alt=""
                ></img>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
