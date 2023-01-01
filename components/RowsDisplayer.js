import CommonRow from "./subComponents/Rows/CommonRow";

export default function RowsDisplayer() {
  return (
    <div>
      <CommonRow title="Continuez à regarder" pt="pt-6" />
      <div className="row_1">row_1</div>
      <div className="row_2">row-2</div>
      <div className="row_3">row-3</div>
    </div>
  );
}
