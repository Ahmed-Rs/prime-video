import { useEffect, useState } from "react";
import CommonRow from "../Rows/CommonRow";

export default function PrimeSearchInfosFilm({
  searchHookRefValue,
  clickGenreIds,
  shopSignal,
}) {
  const [associateContent, setAssociateContent] = useState(true);

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
            // type="movie"
            searchHookChooser={`multi`}
            searchHookRefValue={searchHookRefValue}
            // param={clickGenreIds}
          />
        </>
      ) : (
        <p>Par ici les Détails</p>
      )}
    </div>
  );
}
