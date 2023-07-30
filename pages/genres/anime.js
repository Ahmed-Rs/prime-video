import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Anime() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Animes <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Le meilleur de l'anime"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="16"
        />
        <CommonRow
          title="Les séries"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="16"
        />
      </div>
    </>
  );
}
