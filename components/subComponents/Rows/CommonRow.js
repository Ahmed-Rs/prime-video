export default function CommonRow({ title, pt, props }) {
  return (
    <div className={`u_collect pb-6 text-white` + ` ` + pt}>
      <div className="u_coll_container overflow-visible">
        <div className="title_container relative mx-12 mb-2 leading-6">
          <div className="pe7 flex">
            <div className="logo_container"></div>
            <div className="flexor flex justify-between ml-0 w-full">
              <h2 className="text-[19px] leading-6 p-0 font-bold">{title}</h2>
              <a className="text-xs text-[#79b8f3]" href="">
                Modifier
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="carousel_container">
          <div className="PRE">
            <ul></ul>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
