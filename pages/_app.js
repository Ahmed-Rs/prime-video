import "../styles/globals.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { UserContextProvider } from "../context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { query } from "firebase/firestore";
import { getCurrentUser } from "./api/FirestoreApi";
import { useMemo, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
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
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const [currentUser, setCurrentUser] = useState({});
  // useMemo(() => {
  //   setCurrentUser(setCurrentUser);
  // }, []);

  return (
    <>
      {!(
        router.pathname.includes("legal") || router.pathname.includes("auth")
      ) ? (
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <Layout>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </Layout>
          </UserContextProvider>
        </QueryClientProvider>
      ) : (
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </UserContextProvider>
        </QueryClientProvider>
      )}
    </>
  );
}

export default MyApp;
