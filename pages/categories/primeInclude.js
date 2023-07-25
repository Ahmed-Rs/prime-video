import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function PrimeInclude() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Inclus dans votre abonnement{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les films en tendance"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="12,878"
        />
        <CommonRow
          title="Les séries à regarder en famille"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10751,10762"
        />
      </div>
    </>
  );
}
