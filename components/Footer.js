/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer className="w-full inline-block absolute text-sm mx-auto my-0 p-6 text-center bg-sombres-globalBackground">
      <div className="w-24 h-8 mx-auto top-0  align-bottom text-center">
        <img src="./welcome/White_logo.png" alt="footer-logo" />
      </div>
      <div>
        <Link className="p-2" href="/conditions">
          Conditions d'utilisation et Politique de Confidentialité
        </Link>
        <Link className="p-2" href="/avis">
          Donnez-nous votre avis
        </Link>
        <Link className="p-2" href="/help">
          Aide
        </Link>
        <Link className="p-2" href="/cookies">
          Avertissement relatif aux cookies
        </Link>
        <p className="text-sombres-grayText">
          © 1996-2022, Amazon.com, Inc. ou ses filiales
        </p>
      </div>
    </footer>
  );
}
