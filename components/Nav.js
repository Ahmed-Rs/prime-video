import Link from "next/link";

export default function Nav() {
  return (
    <header className="header">
      <nav className="flex items-center relative h-full w-full mx-0 my-auto px-4 py-8 bg-sombres-nav">
        <div className="block grow-0 shrink-0">
          <Link href="/" className="px-8">
            Logo
          </Link>
        </div>
        <div className=" nav__components w-full flex items-center grow shrink">
          <div className="nav__links block grow pointer-events-none	">
            <Link href="/">Accueil</Link>
            <Link href="/store">Boutique</Link>
            <Link href="/channels">Chaînes</Link>
            <Link href="/categories">Catégories</Link>
            <Link href="/mystuff">Mon espace</Link>
          </div>
          <div className="nav__search">Loupe</div>
          <div className="nav__menu inline-block visible relative">Menu</div>
        </div>
      </nav>
    </header>
  );
}
