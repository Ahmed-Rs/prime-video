import "../styles/globals.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { UserContextProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noAccess = [`/legal/terms`, `auth/login`];
  return (
    <>
      {!(
        router.pathname.includes("legal") || router.pathname.includes("auth")
      ) ? (
        <UserContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContextProvider>
      ) : (
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      )}
    </>
  );
}

export default MyApp;
