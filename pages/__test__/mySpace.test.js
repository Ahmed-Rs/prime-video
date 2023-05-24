import { TMDB_API_KEY } from "../../utils/config";
import { render } from "../../test/test-utils";
import { screen } from "@testing-library/react";

import MySpace from "../mySpace";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import MyApp from "../_app";
import userEvent from "@testing-library/user-event";
import CommonRow from "../../components/subComponents/Rows/CommonRow";
import DoubleRow from "../../components/subComponents/Rows/DoubleRow";
import { act } from "react-dom/test-utils";
import Home from "..";

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

// test("Test de la Home Page", () => {
//   render(<Home />, { Component: Home, pageProps: {} });
//   const linkElement = screen.getByText("Genres");
//   expect(linkElement).toBeInTheDocument();
// });

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

test("Test des éléments des Rows", () => {
  render(<Home />, { Component: Home, pageProps: {} });
  const categoryElement = screen.getByText(/^Films qui pourraient/);
  expect(categoryElement).toBeInTheDocument();
});

// test("Test des éléments de la DoubleRow", () => {
//   render(<DoubleRow />, {
//     Component: DoubleRow,
//     pageProps: { title: "Films qui pourraient vous plaire" },
//   });
//   const categoryElement = screen.getByText("Films qui pourraient vous plaire");
//   expect(categoryElement).toBeInTheDocument();
// });
