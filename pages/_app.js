import "../styles/globals.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noAccess = [`/legal/terms`, `auth/login`];
  return (
    <>
      {!(
        router.pathname.includes("legal") || router.pathname.includes("auth")
      ) ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
