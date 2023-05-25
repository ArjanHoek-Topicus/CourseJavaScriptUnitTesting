import { describe, it, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const testFormData = {
    title: "",
    content: "",
    get(identifier) {
        return this[identifier];
    },
};

const { title, content } = {
    title: "Test title",
    content: "Test content",
};

describe(extractPostData.name, () => {
    beforeEach(() => {
        testFormData.title = title;
        testFormData.content = content;
    });

    it("should extract title and content from the provided form data", () => {
        const result = extractPostData(testFormData);

        expect(result.title).toBe(title);
        expect(result.content).toBe(content);
    });
});
