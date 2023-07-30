import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Kids() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Kids & family{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Films Jeunesse"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="10751"
        />
        <CommonRow
          title="Les séries animées"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10751,10762"
        />
      </div>
    </>
  );
}
