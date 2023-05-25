import { it, expect, describe } from "vitest";
import writeData from "./io";

describe(writeData.name, () => {
    it("should execute the writeFile method", () => {
        const testData = "test";
        const testFileName = "test.txt";

        return expect(
            writeData(testData, testFileName)
        ).resolves.toBeUndefined();
    });
});
