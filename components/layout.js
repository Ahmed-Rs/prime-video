import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen font-poppins bg-sombres-globalBackground relative  ">
      <Nav />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
