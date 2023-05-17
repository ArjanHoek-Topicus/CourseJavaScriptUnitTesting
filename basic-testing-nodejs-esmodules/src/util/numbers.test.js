import { describe, expect, it } from "vitest";
import { transformToNumber } from "./numbers";

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

    it("should throw an error if no value was provided", () => {
        const resultFn = () => transformToNumber();

        expect(resultFn).toThrow(/no argument/i);
    });
});
