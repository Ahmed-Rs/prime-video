import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Scifi() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Sci-fi <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Mystères"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="9648"
        />
        <CommonRow
          title="Les séries science-fiction"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10765"
        />
      </div>
    </>
  );
}
