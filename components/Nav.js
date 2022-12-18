/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { NavMenu } from "./subComponents/navMenu";
import { useState } from "react";

const CatMenu = () => {
  return (
    <ul className="nav_cat_wrapper inline-block absolute top-[2px] w-full min-h-[300px] p-5 m-0 left-0 bg-catPopular z-20">
      <div className="cat_block_1">
        <div className="cat_block_popular">
          <h3>Catégories les plus populaires</h3>
          <ul className="cat_panels grid">
            <li>a</li>
            <li>lorem</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="cat_separator"></div>
      <div className="cat_block_2">Genres</div>
    </ul>
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
            <Link
              id="nav_category_dropdown"
              className="nav_category_dropdown m-2 pr-4 cursor-default z-10"
              href="/category"
            >
              <span
                className="nav_category_dropdown_subMenu relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Catégories
              </span>
              {!hovered ? null : <CatMenu />}
            </Link>
            <Link className="m-2" href="/mystuff">
              Mon espace
            </Link>
          </div>
          <div className="nav__search mr-4 cursor-pointer">
            <img src="./welcome/search-icon.png" alt="search-icon" />
          </div>
          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
