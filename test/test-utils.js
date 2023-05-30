import { render as renderReactTestingLib } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout";
import { UserContextProvider } from "../context/userContext";
import { FilmsHistoryProvider } from "../context/MoviesHooksContext";
import MyApp from "../pages/_app";

const queryClient = new QueryClient();

const FilmsHistoryWrapperProvider = ({ children }) => {
  return <FilmsHistoryProvider>{children}</FilmsHistoryProvider>;
};

function render(ui, { ...options } = {}) {
  const wrapper = ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>
        {/* <UserContextProvider> */}
        <Layout>{children}</Layout>
        {/* </UserContextProvider> */}
      </QueryClientProvider>
    );
  };
  return renderReactTestingLib(ui, { wrapper: wrapper, ...options });
}

export * from "@testing-library/react";
export { render, FilmsHistoryWrapperProvider };
