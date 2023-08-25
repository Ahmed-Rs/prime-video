import { Suspense, lazy } from "react";
const CommonRow = lazy(() => import("./subComponents/Rows/CommonRow"));
const DoubleRow = lazy(() => import("./subComponents/Rows/DoubleRow"));
const CategoryRow = lazy(() => import("./subComponents/Rows/CategoryRow"));
const ChannelRow = lazy(() => import("./subComponents/Rows/ChannelRow"));
const ShopRow = lazy(() => import("./subComponents/Rows/ShopRow"));
const TopTenRow = lazy(() => import("./subComponents/Rows/TopTenRow"));

export default function RowsDisplayer() {
  return (
    <>
      <div data-testid="testor" className="rower pb-[200px]">
        <Suspense fallback={<div>Chargement...</div>}>
          <CommonRow
            title="Continuez à regarder"
            pt="pt-6"
            titleAlign="between"
            searchHookChooser="select"
            type="all"
            filter="trending"
            // param="38"
            // searchHookRefValue="238"
          />
          {/* <CommonRow title="Programmes Amazon Original et exclusivités" /> */}
          {/* Prévoir une DoubleRow pour les séries car ci-bas celle des movies, ou alors randomiser le fetch entre tv et movie */}
          <DoubleRow
            title="Films qui pourraient vous plaire"
            searchHookChooser="select"
            type="movie"
            filter="genre"
            param="12,53"
          />
          <CategoryRow title="Catégories" />
          <ChannelRow title="Abonnez-vous à vos Chaînes" />
          <CommonRow
            title="Les western classiques"
            pt="pt-6"
            titleAlign="between"
            searchHookChooser="select"
            type="movie"
            filter="genre"
            param="37"
          />
          <ShopRow
            textColor="text-clairs-storeFont"
            title="Films disponibles à l'achat ou à la location"
            searchHookChooser="select"
            type="movie"
            filter="genre"
            param="28,18,53"
          />
          <CommonRow
            title="Vos séries actuellement en tendance"
            pt="pt-6"
            titleAlign="between"
            searchHookChooser="select"
            type="tv"
            filter="trending"
          />
          <CommonRow
            title="Les films du moment"
            pt="pt-6"
            titleAlign="between"
            searchHookChooser="select"
            type="movie"
            filter="trending"
          />
          <TopTenRow />
        </Suspense>
      </div>
    </>
  );
}
