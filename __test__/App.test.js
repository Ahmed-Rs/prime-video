import { render } from "../test/test-utils";
import {
  act,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Home from "../pages/index";
import "next-router-mock";
import userEvent from "@testing-library/user-event";
import MySpace from "../pages/mySpace";
import { server } from "../mocks/index";
import { rest } from "msw";
import { API_URL, TMDB_API_KEY, lang } from "../utils/config";

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    // Ajoutez d'autres propriétés selon vos besoins
  }),
}));

beforeEach(() => {
  const user = { id: "1", username: "fakeUsername", token: "FAKE_TOKEN" };
  server.use(
    rest.get(`${API_URL}/me`, async (req, res, ctx) => {
      return res(ctx.json({ user }));
    }),
    rest.get(`${API_URL}/movie/:id`, async (req, res, ctx) => {
      return res(ctx.json(sampleMovie));
    }),
    rest.get(`${API_URL}/tv/:id`, async (req, res, ctx) => {
      return res(ctx.json(sampleMovie));
    }),
    rest.get(`${API_URL}/*`, async (req, res, ctx) => {
      return res(ctx.json(resultsMovies));
    })
  );
});

test("rendu de la page d'accueil de l'App", async () => {
  const accueil = "Accueil";
  const monEspace = "Mon espace";
  const charging = "Chargement...";

  render(<Home></Home>);

  expect(screen.getByText(accueil)).toBeInTheDocument();
  expect(screen.getByText(monEspace)).toBeInTheDocument();

  const testorElement = screen.queryByTestId("testor", {}, { timeout: 3000 });
  expect(testorElement).toBeInTheDocument();
});
