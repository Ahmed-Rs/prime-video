import { useQuery, useMutation, useQueryClient } from "react-query";
import clientApi from "../utils/clientApi";

const useSearchMovie = (query) => {
  const { data } = useQuery(`search/movie?query=${query}`, () =>
    clientApi(`search/movie?query=${query}`)
  );
  // console.log(data?.data.results);
  return data?.data.results[0];
};

export { useSearchMovie };
