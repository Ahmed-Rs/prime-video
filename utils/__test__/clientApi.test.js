import axios from "axios";
import { server, rest } from "../../mocks/index";
import { API_URL, TMDB_API_KEY, lang } from "../config";
import clientApi from "../clientApi";

// Création d'un mock d'axios
jest.mock("axios");

describe("clientApi function testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch data correctly", async () => {
    const endpoint = "clientAPi-fake-endpoint";
    const startChar = endpoint.includes(`?`) ? `&` : `?`;
    const mockData = { results: "test-data" };
    const pages = 3;
    const expectedData = Array(pages).fill(mockData);
    let request;

    // Configuration de réponse du server
    for (let i = 0; i < pages; i++) {
      server.use(
        rest.get(`${API_URL}/${endpoint}`, (req, res, ctx) => {
          request = res;
          // console.log("Incoming request", req.url.toString());
          return res(ctx.json(mockData));
        })
      );
    }
    console.log("request ==> ", request);

    // Configuration du mock d'axios
    axios.get.mockResolvedValue(mockData);

    const result = await clientApi(endpoint, pages);
    expect(result).toEqual(expectedData);
  });

  it("should handle error correctly", async () => {
    const endpoint = "fake-endpoint";

    // Configuration du mock d'axios
    // Simulation d'une erreur qui renvoie un message
    axios.get.mockRejectedValue(new Error("Test error"));

    // Mock de console.log() pour vérifier l'erreur
    console.log = jest.fn();

    const data = await clientApi(endpoint);

    // Tester l'appel à console.log()
    expect(console.log).toHaveBeenCalledWith("Test error");
    // Tester le retour avec tableau vide
    expect(data).toEqual([]);
  });
});
