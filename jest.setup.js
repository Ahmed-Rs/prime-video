import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks";
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
