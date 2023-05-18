import { Suspense, lazy } from "react";
import Nav from "./Nav";
const Footer = lazy(() => import("./Footer"));

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen font-poppins bg-sombres-globalBackground relative">
      <Nav />
      <main className="">{children}</main>
      <Suspense fallback={<div>Chargement ...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
