import { useRouter } from "next/router";
import PrimeSearchMain from "../../components/subComponents/searchComponents/PrimeSearchMain";
import PrimeSearchInfosFilm from "../../components/subComponents/searchComponents/PrimeSearchInfosFilm";

export default function FilmPath() {
  const router = useRouter();
  let { clickQuery, genreIds, mediaType } = router.query;
  // Penser à faire le fetch ici et transmettre le movie recherché à PrimeSearchMain et PrimeSearchInfos au lieu de lancer un fetch dans ces derniers
  // Récupérer du coup le movie en question,
  // Regarder si {series ,movies} = useNavigateMovie() renvoie le nom ou les films entiers dans botcamp => réponse, ce sont les fims entiers

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
