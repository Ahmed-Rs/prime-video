import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Army() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Guerre et politique{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les films de guerre"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="10752"
        />
        <CommonRow
          title="Les séries action"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10768"
        />
      </div>
    </>
  );
}
