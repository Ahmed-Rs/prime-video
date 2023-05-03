import CommonRow from "../Rows/CommonRow";

export default function PrimeSearchInfos({ searchHookRefValue, title }) {
  return (
    <div className="pb-[200px] ">
      <>
        <CommonRow
          title={title}
          searchHookChooser={`multi`}
          searchHookRefValue={searchHookRefValue}
        />
      </>
    </div>
  );
}
