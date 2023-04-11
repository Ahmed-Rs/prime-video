import CommonRow from "../Rows/CommonRow";

export default function PrimeSearchInfos({ searchHookRefValue }) {
  // console.log("query 2 => ", searchHookRefValue);

  return (
    <div>
      <CommonRow
        title="Les client sont également regardé"
        searchHook={`multi`}
        searchHookRefValue={searchHookRefValue}
      />
    </div>
  );
}
