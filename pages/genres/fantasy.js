import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Fantasy() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Fantastique <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les films fantastique"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="14"
        />
        <CommonRow
          title="Les séries"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10751"
        />
      </div>
    </>
  );
}
