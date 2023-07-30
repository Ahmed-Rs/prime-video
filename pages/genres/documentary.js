import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Documentary() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Documentaires{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les docu en prime"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="99"
        />
        <CommonRow
          title="Les séries documentaires"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="99"
        />
      </div>
    </>
  );
}
