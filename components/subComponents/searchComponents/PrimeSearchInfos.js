import { useEffect, useState } from "react";
import CommonRow from "../Rows/CommonRow";

export default function PrimeSearchInfos({ searchHookRefValue }) {
  return (
    <div className="pb-[200px] ">
      <>
        <CommonRow
          title="Les clients ont également regardé"
          searchHookChooser={`multi`}
          searchHookRefValue={searchHookRefValue}
        />
        {/* <CommonRow
          title="Vous pourriez aussi apprécier"
          searchHookChooser=""
          searchHookRefValue=""
        /> */}
      </>
    </div>
  );
}
