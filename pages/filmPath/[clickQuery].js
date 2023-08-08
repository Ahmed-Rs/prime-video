import { useRouter } from "next/router";
import PrimeSearchMain from "../../components/subComponents/searchComponents/PrimeSearchMain";
import PrimeSearchInfosFilm from "../../components/subComponents/searchComponents/PrimeSearchInfosFilm";
import { useEffect, useState } from "react";
import { useMultiSearcher } from "../../utils/hooksApi";
import {
  useAddToHistory,
  useFilmsHistory,
} from "../../context/MoviesHooksContext";

export default function FilmPath() {
  const router = useRouter();
  let { clickQuery, genreIds, mediaType, shopSignal } = router.query;
  const [dataMovie, setDataMovie] = useState([]);

  // On fetch la data de l'Api en fonction de la query récupérée depuis l'URL
  const dataTest = useMultiSearcher(clickQuery);
  useEffect(() => {
    dataTest?.length ? setDataMovie(dataTest) : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTest?.length]);

  const monFilm = dataMovie[0];

  useAddToHistory(monFilm, mediaType);
  const { movies, series } = useFilmsHistory();
  console.log("moviesHistory     ", movies);
  console.log("seriesHistory     ", series);

  return (
    <div>
      <div>
        <PrimeSearchMain
          query={clickQuery}
          monFilm={monFilm}
          shopSignal={shopSignal}
        />
      </div>
      <div>
        <PrimeSearchInfosFilm
          searchHookRefValue={clickQuery}
          clickGenreIds={genreIds}
          shopSignal={shopSignal}
        />
      </div>
    </div>
  );
}
