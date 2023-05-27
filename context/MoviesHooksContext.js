import { createContext, useCallback, useMemo, useReducer } from "react";

const FilmsHistoryContext = createContext();
const maxElements = 6;

const reducer = (state, action) => {
  switch (action.type) {
    case "addMovie":
      return {
        ...state,
        movies: [action.payload, ...state.movies.slice(0, maxElements - 1)],
      };
    case "addSerie":
      return {
        ...state,
        series: [action.payload, ...state.series.slice(0, maxElements - 1)],
      };

    case "clear":
      return {
        movies: [],
        series: [],
      };

    default:
      throw new Error("Unknown action");
  }
};

const FilmsHistoryProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], series: [] });
  const addMovie = useCallback((movie) => {
    dispatch({
      type: "addMovie",
      payload: movie,
    });
  }, []);
  const addSerie = useCallback((serie) => {
    dispatch({ type: "addSerie", payload: serie });
  }, []);
  const clearHistory = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const { movies, series } = state;
  const value = useMemo(() => {
    return { movies, series, addMovie, addSerie, clearHistory };
  }, [addMovie, addSerie, clearHistory, movies, series]);

  return <FilmsHistoryContext.Provider value={value} {...props} />;
};

export { FilmsHistoryContext, FilmsHistoryProvider };
