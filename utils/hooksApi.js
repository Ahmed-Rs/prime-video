import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

const useSearchMovie = (query) => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  return data;
};

const useMovieList = () => {
  const { data } = useQuery(`trending/all/week?`, () =>
    clientApi(`trending/all/week?`)
  );
  return data;
};

export { useSearchMovie, useMovieList };
