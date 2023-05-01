/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { NavMenu } from "./subComponents/Nav/navMenu";
import { useState } from "react";
import SearchBar from "./subComponents/Nav/SearchBar";

const CatMenu = () => {
  return (
    <div className="nav__cat absolute top-[72px] left-0 w-full max-h-[300px] overflow-x-auto overflow-y-auto bg-catPopular z-10">
      <div className="nav_cat_wrapper flex justify-center bg-catPopular w-full p-5 m-0">
        <div className="cat_block_1 w-full flex items-start justify-end">
          <div className="cat_block_popular flex justify-center flex-col w-full max-w-[500px]  ">
            <h3 className="block mb-3 font-medium text-[20px] ">
              Catégories les plus populaires
            </h3>
            <ul className="cat_panels-grid grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-x-3 gap-y-3 ">
              <li className="bg-navCatItem inline-block text-[14px] font-bold break-words w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Inclus avec Amazon Prime
                </Link>
              </li>
              <li className="bg-navCatItem2 inline-block text-[14px] font-bold break-words w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Programmes Amazon Original et exclusivités
                </Link>
              </li>
              <li className="bg-navCatItem inline-block break-words text-[14px] font-bold w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Films
                </Link>
              </li>
              <li className="bg-navCatItem2 inline-block break-words text-[14px] font-bold w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Séries
                </Link>
              </li>
              <li className="bg-navCatItem inline-block break-words text-[14px] font-bold w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Enfants
                </Link>
              </li>
              <li className="bg-navCatItem2 inline-block break-words text-[14px] font-bold w-full h-[99px] text-center rounded-[5px]">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center p-3"
                >
                  Le Pass Ligue 1
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cat_separator w-1 min-h-full my-0 mx-12 bg-slate-400"></div>
        <div className="cat_block_2 flex flex-wrap w-full gap-x-20 ">
          <div className="flex flex-col mb-12">
            <h3 className="mb-4 font-medium text-[20px]">Genres</h3>
            <ul className="cat_block_2_ul block columns-2 gap-x-16 leading-[28px] text-[14px] text-gray-400  ">
              <li>
                <Link href="/">Action et aventure</Link>
              </li>
              <li>
                <Link href="/">Comédie</Link>
              </li>
              <li>
                <Link href="/">Drame</Link>
              </li>
              <li>
                <Link href="/">Documentaire</Link>
              </li>
              <li>
                <Link href="/">Enfants et famille</Link>
              </li>
              <li>
                <Link href="/">Fantastique</Link>
              </li>
              <li>
                <Link href="/">Horreur</Link>
              </li>
              <li>
                <Link href="/">Romance</Link>
              </li>
              <li>
                <Link href="/">Science-fiction</Link>
              </li>
              <li>
                <Link href="/">Suspens</Link>
              </li>
              <li>
                <Link href="/">Anime</Link>
              </li>
              <li>
                <Link href="/">Armée et guerre</Link>
              </li>
              <li>
                <Link href="/">Sport</Link>
              </li>
              <li>
                <Link href="/">Policier</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <h3 className="mb-4 font-medium text-[20px]">Autres catégories</h3>
            <ul className="cat_block_2_ul block leading-[28px] text-[14px] text-gray-400">
              <li>
                <Link href="/">Films ajoutés récemment</Link>
              </li>
              <li>
                <Link href="/">Séries ajoutées récemment</Link>
              </li>
              <li>
                <Link href="/">Programmes primés</Link>
              </li>
              <li>
                <Link href="/">Watch party</Link>
              </li>
              <li>
                <Link href="/">Programmes européens</Link>
              </li>
              <li>
                <Link href="/">
                  Seulement pour une durée limitée sur Amazon Prime
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="header">
      <nav className="flex items-center relative h-full w-full mx-0 my-auto px-8 py-4 bg-sombres-nav">
        <div className="h-10 block grow-0 shrink-0 px-6">
          <Link href="/" className="w-full h-min ">
            <img src="./welcome/White_logo.png" alt="header-nav-logo" />
          </Link>
        </div>
        <div className=" nav__components w-full flex items-center grow shrink">
          <div className="nav__links block grow pointer-events-auto">
            <Link className="m-2" href="/">
              Accueil
            </Link>
            <Link className="m-2" href="/store">
              Boutique
            </Link>
            <Link className="m-2" href="/channels">
              Chaînes
            </Link>
            <div
              id="nav_category_dropdown"
              className="nav_category_dropdown inline-block m-2 cursor-default"
            >
              <span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="py-8 pr-4"
              >
                <span className="nav_category_dropdown_subMenu relative inline-block h-full">
                  Catégories
                </span>
                {!hovered ? null : <CatMenu />}
              </span>
            </div>
            <Link className="m-2" href="/mySpace">
              Mon espace
            </Link>
          </div>
          <div className="nav__search relative mr-4 cursor-pointer text-gray-500 ">
            {/* <img src="./welcome/search-icon.png" alt="search-icon" /> */}
            <SearchBar />
          </div>
          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
