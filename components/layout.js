import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen font-poppins bg-sombres-globalBackground relative">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
