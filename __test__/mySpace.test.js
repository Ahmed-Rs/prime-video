import { TMDB_API_KEY } from "../utils/config";
import { render } from "../test/test-utils";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";

import MySpace from "../pages/mySpace";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import MyApp from "../pages/_app";
import userEvent from "@testing-library/user-event";
import CommonRow from "../components/subComponents/Rows/CommonRow";
import DoubleRow from "../components/subComponents/Rows/DoubleRow";
import { act } from "react-dom/test-utils";
import Home from "../pages";
import RowsDisplayer from "../components/RowsDisplayer";
import Collection from "../components/Collection";
import GlobalDisplayer from "../components/GlobalDisplayer";
import { async } from "@firebase/util";
import Footer from "../components/Footer";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn().mockResolvedValue(true),
      replace: jest.fn().mockResolvedValue(true),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));
jest.mock("next/link", () => {
  return ({ children }) => children;
});

test("Test des éléments de la barre de navigation", () => {
  render(<Home />, { Component: Home, pageProps: {} });
  const categoryElement = screen.getByText("Catégories");
  expect(categoryElement).toBeInTheDocument();
});

test("Test des éléments ds éléments du footer", () => {
  render(<Home />, { Component: Home, pageProps: {} });
  const categoryElement = screen.getByText(/^Conditions d'utilisation et/);
  expect(categoryElement).toBeInTheDocument();
});

test("Test de la continuité", () => {
  render(<Home />, { Component: Home, pageProps: {} });
  const categoryElement = screen.getByText(/^Continuez/);
  expect(categoryElement).toBeInTheDocument();
});

test("Test des éléments de la DoubleRow", () => {
  render(<RowsDisplayer />, {
    Component: RowsDisplayer,
    pageProps: { title: "Films qui pourraient vous plaire" },
  });
  const categoryElement = screen.getByText("Films qui pourraient vous plaire");
  expect(categoryElement).toBeInTheDocument();
});

// // Le testId element dans Collection a été commenté en attendant de trouver la solution pour le rendu conditionnel
// test("Test de Collection", async () => {
//   render(<Collection />, { Component: Collection, pageProps: {} });
//   const categoryElement = screen.getByTestId("testId");
//   expect(categoryElement).toBeInTheDocument();
// });
