import CommonRow from "./subComponents/Rows/CommonRow";
import DoubleRow from "./subComponents/Rows/DoubleRow";
import CategoryRow from "./subComponents/Rows/CategoryRow";
import ChannelRow from "./subComponents/Rows/ChannelRow";
import ShopRow from "./subComponents/Rows/ShopRow";
import TopTenRow from "./subComponents/Rows/TopTenRow";

export default function RowsDisplayer() {
  return (
    <div className="rower pb-[200px] ">
      <CommonRow
        title="Continuez à regarder"
        pt="pt-6"
        titleAlign="between"
        searchHookChooser="select"
        type="tv"
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
    </div>
  );
}
