import { it, expect, describe, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

describe(writeData.name, () => {
    it("should execute the writeFile method", () => {
        const testData = "test";
        const testFileName = "test.txt";

        // return expect(
        //     writeData(testData, testFileName)
        // ).resolves.toBeUndefined();

        writeData(testData, testFileName);

        expect(fs.writeFile).toHaveBeenCalled();
    });
});
