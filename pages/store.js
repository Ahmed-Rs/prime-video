/* eslint-disable @next/next/no-img-element */
import { Suspense, lazy } from "react";
import ShopRow from "../components/subComponents/Rows/ShopRow";
const CommonRow = lazy(() =>
  import("../components/subComponents/Rows/CommonRow")
);

export default function Store() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <span className="flex items-center">
          <img
            className="inline-block w-[28px] h-[28px] mr-3 "
            src="welcome/shopping-bag-24.png"
            alt=""
          />
          <h1 className="text-clairs-storeFont">Boutique</h1>
        </span>
      </div>
      <div className="rows__container">
        <ShopRow
          textColor="text-clairs-storeFont"
          title="Films disponibles à la location ou à la vente"
          searchHookChooser="select"
          type="movie"
          filter="genre" // Le filter: "genre" génère des résultats de films sans précision du media_type => quand on clique sur ces films l'url prend un undefined en mediaType et ils sont rangés dans l'historique dans "séries" par défaut
          // MAIS on doit préciser dans notre requête si on veut des movies ou des series
          param="12,878" // NE PAS mettre de param qui ne se trouve pas dans la liste des genres movies ou series sinon erreur
        />
        <ShopRow
          textColor="text-clairs-storeFont"
          title="Les séries à regarder en famille à louer ou à acheter"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10751,10762"
        />
      </div>
    </>
  );
}
