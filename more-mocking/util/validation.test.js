import { describe, it, expect, beforeEach } from "vitest";
import { validateNotEmpty } from "./validation";

describe(validateNotEmpty.name, () => {
    let text = "";
    let message = "";

    beforeEach(() => {
        text = "This is a test";
        message = "This is an empty string";
    });

    it("should not throw an error when a valid string is passed", () => {
        const resultFn = () => validateNotEmpty(text, message);
        expect(resultFn).not.toThrow();
    });

    it("should throw an error when an empty string is passed", () => {
        const resultFn = () => validateNotEmpty("", message);
        expect(resultFn).toThrow(message);
    });

    it("should throw an error when a string of spaces is passed", () => {
        const resultFn = () => validateNotEmpty("      ", message);
        expect(resultFn).toThrow(message);
    });
});
