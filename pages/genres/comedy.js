import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Comedy() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Comédie <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les comédies du moments"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="35"
        />
        <CommonRow
          title="Les séries comédie"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="35"
        />
      </div>
    </>
  );
}
