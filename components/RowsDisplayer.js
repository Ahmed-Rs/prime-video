import CommonRow from "./subComponents/Rows/CommonRow";
import DoubleRow from "./subComponents/Rows/DoubleRow";

export default function RowsDisplayer() {
  return (
    <div className="rower">
      <CommonRow title="Continuez à regarder" pt="pt-6" titleAlign="between" />
      <CommonRow title="Programmes Amazon Original et exclusivités" />
      <DoubleRow title="Films qui pourraient vous plaire" />
      <CommonRow title="" />
      <CommonRow title="" />
    </div>
  );
}
