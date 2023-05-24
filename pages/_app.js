import "../styles/globals.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { UserContextProvider } from "../context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { query } from "firebase/firestore";
import { getCurrentUser } from "./api/FirestoreApi";
import { StrictMode, useMemo, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
// import Profiling from "../components/Profiler";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            refetchOnWindowFocus: false,
            retryDelay: 500,
            retry: (failureCount, error) => {
              if (error.status === 404) return false;
              else if (error.status === 401) return false;
              else if (failureCount > 3) return false;
              else return true;
            },
          },
          mutations: {
            useErrorBoundary: false,
            refetchOnWindowFocus: false,
            retryDelay: 500,
            retry: 1,
            // mutation options
          },
        },
      }),
    []
  );
  const shouldRenderLayout = !(
    router.pathname.includes("legal") || router.pathname.includes("auth")
  );

  return (
    <>
      <StrictMode>
        {/* <Profiling id={"primeApp"} phases={"mount"}> */}
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            {shouldRenderLayout ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
            <ReactQueryDevtools initialIsOpen={false} />
          </UserContextProvider>
        </QueryClientProvider>
        {/* </Profiling> */}
      </StrictMode>
    </>
  );
}

export default MyApp;
