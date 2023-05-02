import { useRouter } from "next/router";
import PrimeSearchMain from "../../components/subComponents/searchComponents/PrimeSearchMain";
import PrimeSearchInfosFilm from "../../components/subComponents/searchComponents/PrimeSearchInfosFilm";

export default function FilmPath() {
  const router = useRouter();
  let { clickQuery } = router.query;
  let genreIds = router.query.genreIds;

  return (
    <div>
      <div>
        <PrimeSearchMain query={clickQuery} />
      </div>

      <div>
        <PrimeSearchInfosFilm
          searchHookRefValue={clickQuery}
          clickGenreIds={genreIds}
        />
      </div>
    </div>
  );
}
