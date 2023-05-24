import { getUniqueID } from "../getUniqueId";

test("getUnique id renvoie une string", () => {
  const testData = "hi";
  const typeOfTestData = typeof testData;

  const trueData = getUniqueID();
  const typeOfTrueData = typeof trueData;

  expect(typeOfTestData).toBe(typeOfTrueData);
});
