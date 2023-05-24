import { Suspense, lazy } from "react";
const CommonRow = lazy(() => import("./subComponents/Rows/CommonRow"));
const DoubleRow = lazy(() => import("./subComponents/Rows/DoubleRow"));
const CategoryRow = lazy(() => import("./subComponents/Rows/CategoryRow"));
const ChannelRow = lazy(() => import("./subComponents/Rows/ChannelRow"));
const ShopRow = lazy(() => import("./subComponents/Rows/ShopRow"));
const TopTenRow = lazy(() => import("./subComponents/Rows/TopTenRow"));

export default function RowsDisplayer() {
  return (
    <div className="rower pb-[200px] ">
      <Suspense fallback={<div>Chargement...</div>}>
        <p>Hello world</p>
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
        <DoubleRow title="Films qui pourraient vous plaire" />
        <CategoryRow title="Catégories" />
        <ChannelRow title="Abonnez-vous à vos Chaînes" />
        {/* <CommonRow title="Programmes Amazon Original et exclusivités" /> */}
        <ShopRow title="Films actuellement en tendance" />
        <TopTenRow />
        {/* <CommonRow title="Films ajoutés récemment" /> */}
      </Suspense>
    </div>
  );
}
