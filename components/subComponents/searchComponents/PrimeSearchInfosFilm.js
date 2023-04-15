import { useEffect, useState } from "react";
import CommonRow from "../Rows/CommonRow";

export default function PrimeSearchInfosFilm({
  searchHookRefValue,
  clickGenreIds,
}) {
  const [associateContent, setAssociateContent] = useState(true);
  // console.log("clickQuery 2 => ", searchHookRefValue);
  // console.log("genreIds 2 => ", clickGenreIds);

  return (
    <div className="pb-[200px] ">
      <div className="pb-[100px] ">
        <div className="flex justify-center w-full m-auto">
          <span
            className="cursor-pointer"
            onClick={() => setAssociateContent(true)}
          >
            Contenu associé
          </span>
          <span
            className="cursor-pointer"
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
            searchHookChooser="select"
            searchHookRefValue={searchHookRefValue}
            localParam={clickGenreIds}
          />
        </>
      ) : (
        <p>Par ici les Détails</p>
      )}
    </div>
  );
}
