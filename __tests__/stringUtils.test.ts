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

    test("getSumFromString should return sum of multi digit numbers in string", () => {
      expect(getSumFromString("555,22")).toBe(577);
    })

  })

  describe("getSumFromString edge cases", () => {
    test("getSumFromString should return 0 for string with only one comma", () => {
      expect(getSumFromString(",")).toBe(0);
    })

    test("getSumFromString should return 0 for string with multiple commas", () => {
      expect(getSumFromString(",,,")).toBe(0);
    })

    test("getSumFromString should return sum for string with preceding comma", () => {
      expect(getSumFromString(",1,2")).toBe(3);
    })

    test("getSumFromString should return sum for string with trailing comma", () => {
      expect(getSumFromString("1,2,")).toBe(3);
    })

  })

});