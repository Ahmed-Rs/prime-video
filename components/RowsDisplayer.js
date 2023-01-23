import CommonRow from "./subComponents/Rows/CommonRow";
import DoubleRow from "./subComponents/Rows/DoubleRow";
import CategoryRow from "./subComponents/Rows/CategoryRow";
import ChannelRow from "./subComponents/Rows/ChannelRow";
import ShopRow from "./subComponents/Rows/ShopRow";

export default function RowsDisplayer() {
  return (
    <div className="rower">
      <CommonRow title="Continuez à regarder" pt="pt-6" titleAlign="between" />
      <CommonRow title="Programmes Amazon Original et exclusivités" />
      <DoubleRow title="Films qui pourraient vous plaire" />
      <CategoryRow title="Catégories" />
      <ChannelRow title="Abonnez-vous à vos Chaînes" />
      <ShopRow title="Films actuellement en tendance" />
    </div>
  );
}
