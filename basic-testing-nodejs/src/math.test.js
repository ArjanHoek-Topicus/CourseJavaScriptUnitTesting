import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
    // Arrange
    const values = [1, 2, 3];

    // Act
    const result = add(values);

    // Assert
    expect(result).toBe(6);
});

it("should yield NaN if at lest one invalid number is provided", () => {
    const values = [1, 2, "invalid"];

    const result = add(values);

    expect(result).toBeNaN();
    expect(result).not.toBe(3);
    expect(result).not.toBeUndefined();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
    const values = ["1", 2, "3"];

    const result = add(values);

    expect(result).toBe(6);
    expect(result).not.toBeNaN();
    expect(result).not.toBeUndefined();
});

it("should yield 0 if an empty array is provided", () => {
    const values = [];

    const result = add(values);

    expect(result).toBe(0);
});

it("should throw an error if no value is provided", () => {
    const resultFn = () => add();

    expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
    const value1 = 1;
    const value2 = 2;
    const value3 = 3;

    const resultFn = () => add(value1, value2, value3);

    expect(resultFn).toThrow(/is not iterable/);
});
