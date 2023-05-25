import { it, expect, describe, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => args[args.length - 1],
        },
    };
});

describe(writeData.name, () => {
    it("should execute the writeFile method", () => {
        const testData = "test";
        const testFileName = "test.txt";

        writeData(testData, testFileName);
        expect(fs.writeFile).toHaveBeenCalledWith(testFileName, testData);
    });

    it("should return a promise that resolves to no value if called correctly", () => {
        const testData = "test";
        const testFileName = "test.txt";

        return expect(
            writeData(testData, testFileName)
        ).resolves.toBeUndefined();
    });
});
