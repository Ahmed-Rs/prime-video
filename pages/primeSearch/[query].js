import { useRouter } from "next/router";
import PrimeSearchInfos from "../../components/subComponents/searchComponents/PrimeSearchInfos";

export default function PrimeSearch() {
  const router = useRouter();
  let { query } = router.query;
  return (
    <div>
      <div>
        <PrimeSearchInfos
          title="Résultats de votre recherche"
          searchHookRefValue={query}
        />
      </div>
    </div>
  );
}
