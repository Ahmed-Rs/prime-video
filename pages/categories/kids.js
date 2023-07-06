import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Kids() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>Jeunesse</h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Les films animés"
          searchHookChooser="select"
          type="movie"
          filter="genre" // Le filter: "genre" génère des résultats de films sans précision du media_type => quand on clique sur ces films l'url prend un undefined en mediaType et ils sont rangés dans l'historique dans "séries" par défaut
          // MAIS on doit préciser dans notre requête si on veut des movies ou des series
          param="10751" // NE PAS mettre de param qui ne se trouve pas dans la liste des genres movies ou series sinon erreur
        />
        <CommonRow
          title="Les séries à regarder en famille"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10751,10762"
        />
      </div>
    </>
  );
}
