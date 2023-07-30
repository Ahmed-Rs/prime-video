import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Drama() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Drame <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Films dramatiques"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="18"
        />
        <CommonRow
          title="Les drames en séries"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="18,35"
        />
      </div>
    </>
  );
}
