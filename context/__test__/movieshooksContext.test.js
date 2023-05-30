import { renderHook, act } from "@testing-library/react-hooks";
import { FilmsHistoryWrapperProvider } from "../../test/test-utils";
import {
  useClearHistory,
  useAddToHistory,
  useFilmsHistory,
} from "../MoviesHooksContext";

test("useClearHistory est bien une fonction", () => {
  const { result } = renderHook(() => useClearHistory(), {
    wrapper: FilmsHistoryWrapperProvider,
  });
  expect(result.current).toEqual(expect.any(Function));
});

test("les fonctions adDMovie et addSerie ajoutent bel et bien un film et une série", () => {
  const movie = { id: 1, fakeName: "Terminator" };
  const serie = { id: 1, fakeName: "Money Heist" };
  const { result } = renderHook(() => useFilmsHistory(), {
    wrapper: FilmsHistoryWrapperProvider,
  });
  expect(result.current).toEqual({
    movies: [],
    series: [],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
  act(() => {
    result.current.addMovie(movie);
  });
  expect(result.current).toEqual({
    movies: [movie],
    series: [],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
  act(() => {
    result.current.addSerie(serie);
  });
  expect(result.current).toEqual({
    movies: [movie],
    series: [serie],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
});

test("useClearHistory retourne des tableaux videss", () => {
  const movie = { id: "550", name: "fakeMovie" };
  const serie = { id: "550", name: "fakeSerie" };
  const { result } = renderHook(() => useFilmsHistory(), {
    wrapper: FilmsHistoryWrapperProvider,
  });
  expect(result.current).toEqual({
    movies: [],
    series: [],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
  act(() => {
    result.current.addMovie(movie);
  });
  expect(result.current).toEqual({
    movies: [movie],
    series: [],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
  act(() => {
    result.current.addSerie(serie);
  });
  expect(result.current).toEqual({
    movies: [movie],
    series: [serie],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
  act(() => {
    result.current.clearHistory();
  });
  expect(result.current).toEqual({
    movies: [],
    series: [],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
});

test("Ajout d'un film et d'une série via useAddtoHistory", () => {
  const movie = { id: "550", name: "fakeMovie" };
  const serie = { id: "550", name: "fakeSerie" };
  const { result } = renderHook(
    () => {
      useAddToHistory(movie, "movie");
      useAddToHistory(serie, "serie");
      return useFilmsHistory();
    },
    { wrapper: FilmsHistoryWrapperProvider }
  );
  expect(result.current).toEqual({
    movies: [movie],
    series: [serie],
    addMovie: expect.any(Function),
    addSerie: expect.any(Function),
    clearHistory: expect.any(Function),
  });
});
