import Collection from "./Collection";
import RowsDisplayer from "./RowsDisplayer";

export default function GlobalDisplayer() {
  return (
    <div>
      <div className="collection">
        <Collection />
      </div>
      <div className="rowsDisplayer">
        <RowsDisplayer />
      </div>
    </div>
  );
}
