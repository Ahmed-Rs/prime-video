import { useEffect, useState } from "react";
import CommonRow from "../Rows/CommonRow";
import PrimeSearchDetails from "./PrimeSearchDetails";

export default function PrimeSearchInfosFilm({
  searchHookRefValue,
  monFilm,
  clickGenreIds,
  shopSignal,
}) {
  const [associateContent, setAssociateContent] = useState(true);

  return (
    <div className="pb-[200px] ">
      <div className="pb-[100px] ">
        <div className="flex justify-center w-full m-auto">
          <span
            className="filterCardBtn cursor-pointer border px-7 py-3 mr-3 text-base bg-[#2f3640] rounded-lg hover:bg-slate-300"
            onClick={() => setAssociateContent(true)}
          >
            Contenu associé
          </span>
          <span
            className="filterCardBtn cursor-pointer border px-7 py-3 mr-3 text-base bg-[#2f3640] rounded-lg hover:bg-slate-300"
            onClick={() => setAssociateContent(false)}
          >
            Détails
          </span>
        </div>
      </div>
      {associateContent ? (
        <>
          <CommonRow
            title="Les clients ont également regardé"
            // type="movie"
            searchHookChooser={`multi`}
            searchHookRefValue={searchHookRefValue}
            // param={clickGenreIds}
          />
        </>
      ) : (
        <>
          <PrimeSearchDetails monFilm={monFilm} />
        </>
      )}
    </div>
  );
}
