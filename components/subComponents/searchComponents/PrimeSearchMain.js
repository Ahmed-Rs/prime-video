/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function PrimeSearchMain() {
  const [imageVisible, setImageVisible] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    // Si écran assez grand on lance la logique de diffusion image/video
    if (!isSmallScreen) {
      let intervalId = setTimeout(() => {
        setImageVisible(false);
      }, 2000);
      let intervalId2 = setTimeout(() => {
        setImageVisible(true);
      }, 3000);
      console.log("int2 :", intervalId2);
      return () => {
        clearTimeout(intervalId);
        clearTimeout(intervalId2);
      };
    } else setImageVisible(true);
  }, [isSmallScreen]);

  return (
    <div className="mb-[200px]">
      <div className="pSM__layout w-full max-h-[70vh] ">
        <div className="pSM__container relative px-7 ">
          <div
            className={`pSM__background min-w-[70vw] max-w-[80vw] absolute z-0 top-0 right-0 `}
          >
            <div
              className={`pSM__background__img w-full ${
                imageVisible ? "pSMVisible" : "pSMInvisible"
              }`}
            >
              <img
                src="\film-data\backdrops\celebrity.jpg"
                className="w-full  object-contain "
                alt=""
              />
            </div>
            <div
              className={`pSM__background__vid w-full ${
                imageVisible ? "pSMInvisible" : "pSMVisible"
              }`}
            >
              <img
                src="\film-data\backdrops\chemin-liberte.jpg"
                className="w-full object-contain "
                alt=""
              ></img>
            </div>
          </div>
          <div className="pSM__description z-[2] relative pt-[60px]">
            <div className="pSM__description__inner flex flex-row-reverse justify-between">
              <div className="">logo prime</div>
              <div className="flex flex-col">
                <div className="mt-20 mb-6">
                  <h1 className="text-[36px] font-extrabold">Anti-Life</h1>
                </div>
                <div className="film__description mb-3">
                  <div className="w-[50%]">
                    <span>
                      Une arche interstellaire transporte les derniers humains à
                      travers l'espace à la recherche d'une Terre Promise. Alors
                      que les naufragés sont plongés dans un sommeil
                      cryogénique, l'équipage de ce vaisseau titanesque doit
                      faire face à un alien métamorphe qui décime petit à petit
                      les naufragés…
                    </span>
                  </div>
                </div>
                <div className="imdbiz mb-3">
                  <div className="flex items-center">
                    <div>IMDb</div>
                    <div>1 h 32 min</div>
                    <div>2020</div>
                    <div>X-Ray</div>
                    <div>18+</div>
                  </div>
                </div>
                <div className="related__genres mb-3">
                  <div className="flex items-center">
                    <p>Science-fiction</p>
                    <p>Horreur</p>
                    <p>Intense</p>
                    <p>Palpitant</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div>Inclus avec Amazon Prime</div>
                </div>
                <div className="choice__symbols__container mb-3">
                  <div className="flex items-center">
                    <div>Lecture</div>
                    <div>Plus d'options d'achat</div>
                    <div>Bande-annonce</div>
                    <div>Liste de favoris</div>
                    <div>Télécharger</div>
                    <div>Watch Party</div>
                    <div>Partager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
