export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen font-poppins bg-sombres-globalBackground relative">
      <main>{children}</main>
    </div>
  );
}
