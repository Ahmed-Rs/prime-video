import { rest } from "msw";
import { API_URL, TMDB_API_KEY, lang } from "../utils/config";

export const handlers = [
  rest.get(`${API_URL}/:endpoint`, (req, res, ctx) => {
    const { endpoint } = req.params;
    const { pages } = req.url.searchParams;
    const mockDataPage = Array(parseInt(pages)).fill(mockData);

    return res(ctx.json(mockDataPage));
  }),
];
