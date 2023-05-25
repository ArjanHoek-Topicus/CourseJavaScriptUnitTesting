import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe(HttpError.name, () => {
    it("should store the status code, the message and the data in the object", () => {
        const statusCode = 404;
        const message = "Page not found";
        const data = { key: "test" };

        const httpError = new HttpError(statusCode, message, data);

        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toEqual({ ...data });
    });

    it("should contain undefined as data when no data is provided", () => {
        const statusCode = 404;
        const message = "Page not found";

        const httpError = new HttpError(statusCode, message);

        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBeUndefined();
    });
});

describe(ValidationError.name, () => {
    it("should store the message in the object", () => {
        const message = "Validation error";
        const validationError = new ValidationError("Validation error");

        expect(validationError.message).toBe(message);
    });
});
