import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Policier() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Policiers <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les meilleurs films policiers"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="10749"
        />
        <CommonRow
          title="Les séries tendances du moment"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="80"
        />
      </div>
    </>
  );
}
