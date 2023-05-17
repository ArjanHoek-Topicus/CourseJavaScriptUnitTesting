import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe(transformToNumber.name, () => {
    it("should convert string type value to number type value", () => {
        const value = "3";

        const result = transformToNumber(value);

        expect(result).toBe(3);
        expect(result).toBeTypeOf("number");
    });

    it("should return NaN if string is not convertible to number", () => {
        const value = "3three";

        const result = transformToNumber(value);

        expect(result).toBeNaN();
        expect(result).not.toBe(3);
    });
});

describe(cleanNumbers.name, () => {
    it("should return an array of number values if an array of string number values is provided", () => {
        const numberValues = ["1", "2"];
        const result = cleanNumbers(numberValues);

        expect(result).toBeTypeOf("object");
        expect(result[0]).toBeTypeOf("number");
        expect(result).toEqual([1, 2]);
    });

    it("should throw an error if the provided array contains at least one empty string", () => {
        const numberValues = ["", 2];
        const resultFn = () => cleanNumbers(numberValues);
        expect(resultFn).toThrow();
    });
});
