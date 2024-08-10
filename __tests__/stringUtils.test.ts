import { getSumFromString } from "@/app/stringUtils";


describe("String Utils", () => {

  describe("getSumFromString basic functionality", () => {

    test("getSumFromString should return 0 for empty string", () => {
      expect(getSumFromString("")).toBe(0);
    });

    test("getSumFromString should return same number if only single number is provided in string", () => {
      expect(getSumFromString("1")).toBe(1);
    })

    test("getSumFromString should return sum of numbers in string", () => {
      expect(getSumFromString("1,2")).toBe(3);
    })

  })

});