import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function AmzOriginals() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Toutes vos exclusivités Amazon{" "}
          <span className="text-clairs-primeLogoColor">Prime Vidéo</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Vos séries dramatiques"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10768"
        />
        <CommonRow
          title="Science-Fiction et Fantaisie"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10765"
        />
      </div>
    </>
  );
}
