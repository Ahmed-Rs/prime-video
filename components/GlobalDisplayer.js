import { Suspense, lazy } from "react";
const Collection = lazy(() => import("./Collection"));
const RowsDisplayer = lazy(() => import("./RowsDisplayer"));

export default function GlobalDisplayer() {
  return (
    <div className="globalDisplayer">
      <div className="collection">
        <Suspense fallback={<div>Chargement...</div>}>
          <Collection />
        </Suspense>
      </div>
      <div className="rowsDisplayer">
        <Suspense fallback={<div>Chargement...</div>}>
          <RowsDisplayer />
        </Suspense>
      </div>
    </div>
  );
}
