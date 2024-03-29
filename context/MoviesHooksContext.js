import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

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
        ...state,
        movies: [],
        series: [],
      };

    default:
      throw new Error("Unknown action");
  }
};

const FilmsHistoryProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], series: [] });

  const addMovie = useCallback(
    (movie) => {
      if (!state.movies.find((m) => m.id === movie.id)) {
        dispatch({
          type: "addMovie",
          payload: movie,
        });
      }
    },
    [state.movies]
  );

  const addSerie = useCallback(
    (serie) => {
      if (!state.series.find((s) => s.id === serie.id)) {
        dispatch({ type: "addSerie", payload: serie });
      }
    },
    [state.series]
  );

  const clearHistory = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const { movies, series } = state;
  const value = useMemo(() => {
    return { movies, series, addMovie, addSerie, clearHistory };
  }, [addMovie, addSerie, clearHistory, movies, series]);
  console.log("value", value);

  return <FilmsHistoryContext.Provider value={value} {...props} />;
};

const useFilmsHistory = () => {
  const context = useContext(FilmsHistoryContext);
  if (!context) {
    throw new Error("useFilmsHistory() s'utilise avec <FilmsHistoryContext />");
  }
  return context;
};

const useAddToHistory = (film, type) => {
  const { addMovie, addSerie } = useFilmsHistory();
  useEffect(() => {
    if (film) {
      if (type === "movie") {
        addMovie(film);
      } else {
        addSerie(film);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]);
};

const useClearHistory = () => {
  const { clearHistory } = useFilmsHistory();
  return clearHistory;
};

export {
  FilmsHistoryContext,
  FilmsHistoryProvider,
  useFilmsHistory,
  useAddToHistory,
  useClearHistory,
};
