/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Nav() {
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
            <Link className="m-2" href="/categories">
              Catégories
            </Link>
            <Link className="m-2" href="/mystuff">
              Mon espace
            </Link>
          </div>
          <div className="nav__search mr-4 cursor-pointer">
            <img src="./welcome/search-icon.png" alt="search-icon" />
          </div>
          <div className="nav__menu flex visible relative cursor-pointer">
            <div className="mr-4">
              <img src="./welcome/user-24.png" alt="user-icon" />
            </div>
            <div>User Name</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
