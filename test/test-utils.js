import { render as renderReactTestingLib } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout";

const queryClient = new QueryClient();

function render(ui, { ...options } = {}) {
  const Wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>
    </QueryClientProvider>
  );

  return renderReactTestingLib(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
export { render };
