import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe(generateReportData.name, () => {
    it("should execute logFn if provided", () => {
        const logger = vi.fn();

        logger.mockImplementation(() => {});

        generateReportData(logger);

        expect(logger).toHaveBeenCalledTimes(1);
    });
});
