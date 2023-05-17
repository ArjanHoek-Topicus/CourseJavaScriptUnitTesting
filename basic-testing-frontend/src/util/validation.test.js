import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe(validateStringNotEmpty.name, () => {
    it("should throw an error if an empty string was provided", () => {
        const value = "";

        const resultFn = () => validateStringNotEmpty(value);

        expect(resultFn).toThrow(/invalid input/i);
    });

    it("should not throw an error if a valid string was provided", () => {
        const value = "Valid string";

        const resultFn = () => validateStringNotEmpty(value);

        expect(resultFn).not.toThrow();
    });
});

describe(validateNumber.name, () => {
    it("should return undefined if a number is provided", () => {
        const value = 3;

        const result = validateNumber(value);
        expect(result).toBeUndefined();
    });

    it("should not throw an error if a value is provided that is of type number", () => {
        const value = 5;

        const resultFn = () => validateNumber(value);

        expect(resultFn).not.toThrow();
    });

    it("should throw an error if a value is provided that is not of type number", () => {
        const value = "3";

        const resultFn = () => validateNumber(value);

        expect(resultFn).toThrow(/invalid number/i);
    });
});
