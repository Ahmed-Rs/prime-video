import { useRouter } from "next/router";
import PrimeSearchMain from "../../components/subComponents/searchComponents/PrimeSearchMain";
import PrimeSearchInfos from "../../components/subComponents/searchComponents/PrimeSearchInfos";

export default function PrimeSearch() {
  const router = useRouter();
  let { query } = router.query;

  return (
    <div>
      <div>
        <PrimeSearchMain />
      </div>

      <div>
        <PrimeSearchInfos />
      </div>
      {/* <h1>Ma query : {query}</h1> */}
    </div>
  );
}
