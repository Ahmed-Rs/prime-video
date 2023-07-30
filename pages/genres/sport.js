import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Sport() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Sports <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Le docu sportif"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="99"
        />
        <CommonRow
          title="Retrouvez vos cométitions préférées"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10768"
        />
      </div>
    </>
  );
}
