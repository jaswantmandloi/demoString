import { getSumFromString } from "@/app/stringUtils";


describe("String Utils", () => {

  describe("getSumFromString comma separated numbers", () => {

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

  describe("getSumFromString edge cases for the commas", () => {
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

  describe("getSumFromString new line separated numbers", () => {
    test("getSumFromString should return 0 for string with only new line", () => {
      expect(getSumFromString("\n")).toBe(0);
    })
    test("getSumFromString should return sum for string with new line", () => {
      expect(getSumFromString("1\n2")).toBe(3);
    })
    test("getSumFromString should return sum for string with new line and comma", () => {
      expect(getSumFromString("1\n2,3")).toBe(6);
    })
    test("getSumFromString should return 0 for string with new line and comma", () => {
      expect(getSumFromString("\n,")).toBe(0);
    })

    test("getSumFromString should return 0 for string with multiple new line and comma", () => {
      expect(getSumFromString("\n\n,,")).toBe(0);
    })

  })

  describe("getSumFromString different kind of delimiter (;,\n. ) separated numbers", () => {
    
    test("getSumFromString should return sum for string with dot delimiter", () => {
      expect(getSumFromString("1.3.3")).toBe(7);
    })
    test("getSumFromString should return sum for string with semicolon delimiter", () => {
      expect(getSumFromString("1;3;3")).toBe(7);
    })
    test("getSumFromString should return sum for string with comma and semicolon delimiter", () => {
      expect(getSumFromString("1,3;3")).toBe(7);
    })
    test("getSumFromString should return sum for string with comma, semicolon and dot delimiter", () => {
      expect(getSumFromString("1.3;3")).toBe(7);
    })

    test("getSumFromString should return sum for string with comma, semicolon, new line, space and dot delimiter", () => {
      expect(getSumFromString("1.3;3\n8 9 10")).toBe(34);
    })

    test(`getSumFromString should return sum for string "//;\n1;2" where the delimiter is ";"  `, () => {
      expect(getSumFromString("//;\n1;2")).toBe(3);
    })

    test(`getSumFromString should return sum for string "//,\n4,26" where the delimiter is ","  `, () => {
      expect(getSumFromString("//,\n4,26")).toBe(30);
    })

    test.only(`Calling getSumFromString with a negative number will throw an exception: "negative numbers not allowed <negative_number>".  `, () => {
      expect(getSumFromString("//,\n-4,-26")).toThrow("negative numbers not allowed -4, -26");
    })

  })

  describe("getSumFromString different kind of delimiter (;,\n. ) separated numbers edge cases", () => {
   
    test("getSumFromString should return 0 for string with dot delimiter without numbers", () => {
      expect(getSumFromString(".")).toBe(0);
    })
    test("getSumFromString should return 0 for string with semicolon, dot and space delimiter without numbers", () => {
      expect(getSumFromString(";. ")).toBe(0);
    })
    test("getSumFromString should return 0 for string with multiple dot delimiter without numbers", () => {
      expect(getSumFromString("...")).toBe(0);
    })
    test("getSumFromString should return sum for string with extra suffixed  dot delimiter", () => {
      expect(getSumFromString("1.3.3.")).toBe(7);
    })
    test("getSumFromString should return sum for string with extra prefixed  dot delimiter", () => {
      expect(getSumFromString(".1.3.3")).toBe(7);
    })
    test("getSumFromString should return sum for string with extra prefixed  dot and space delimiter", () => {
      expect(getSumFromString(" .1.3.3")).toBe(7);
    })
    test("getSumFromString should return sum for string with extra prefixed  dot, semicolon and space delimiter", () => {
      expect(getSumFromString("; .1.3.3 ")).toBe(7);
    })

    
  })

});