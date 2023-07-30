import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Action() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Action & aventure{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les films d'action"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="28"
        />
        <CommonRow
          title="Les séries tendances"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10759"
        />
      </div>
    </>
  );
}
