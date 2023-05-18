// import { server, rest } from "../../mocks";
// import { useMultiSearcher } from "../hooksApi";

// test("tester le useMultiSearcher", ()=> {
// const query = "interstellar"

// })

test("returns ", () => {
  const signal = "no";
  const inspector = "no";
  expect(signal).toBe(inspector);
});

// const ueMultiSearcher = (query = "interstellar") => {
//   const { data } = useQuery(`search/multi?query=${query}`, () =>
//     clientApi(`search/multi?query=${query}`)
//   );
//   // On concatène les datas dans le array principal
//   const multiData = data?.reduce((acc, item) => {
//     return acc.concat(item.data.results);
//   }, []);
//   // console.log("multiData hooksApi : ", multiData);
//   return multiData ?? [];
// };
