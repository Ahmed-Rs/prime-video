import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen md:max-w-2x font-poppins bg-sombres-globalBackground">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
