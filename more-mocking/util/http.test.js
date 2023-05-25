import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = {
    testKey: "testData",
};

const fetchMock = vi.fn((_, options) => {
    return new Promise((resolve, rej) => {
        if (typeof options.body !== "string") {
            return rej("Not a string.");
        }

        const testResponse = {
            ok: true,
            json() {
                return new Promise((res) => {
                    res(testResponseData);
                });
            },
        };

        resolve(testResponse);
    });
});

vi.stubGlobal("fetch", fetchMock);

describe(sendDataRequest.name, () => {
    it("should return any available response data", () => {
        const testData = { key: "test" };

        expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    });

    it("should convert the provided data to JSON before sending the request", async () => {
        const testData = { key: "test" };
        let errorMessage = "";

        try {
            await sendDataRequest(testData);
        } catch (err) {
            errorMessage = err;
        }

        expect(errorMessage).not.toBe("Not a string.");
    });
});
