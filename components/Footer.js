import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer>
      <div>logo</div>
      <div>
        <Link href="/conditions">
          Conditions d'utilisation et Politique de Confidentialité
        </Link>
        <Link href="/avis">Donnez-nous votre avis</Link>
        <Link href="/help">Aide</Link>
        <Link href="/cookies">Avertissement relatif aux cookies</Link>
        <p>© 1996-2022, Amazon.com, Inc. ou ses filiales</p>
      </div>
    </footer>
  );
}
