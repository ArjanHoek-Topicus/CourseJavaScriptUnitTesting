import { it, describe, expect, vi, beforeEach } from "vitest";

import fs from "fs";
import path from "path";

import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal("document", document);

describe(showError.name, () => {
    let errorsEl;

    beforeEach(() => {
        document.body.innerHTML = "";
        document.write(htmlDocumentContent);
        errorsEl = document.getElementById("errors");
    });

    it("should add an error paragraph to the errors container element", () => {
        showError("This is not working");
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph).not.toBeNull();
    });

    it("should not contain an error paragraph initially", () => {
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph).toBeNull();
    });

    it("should output the provided message in the error paragraph", () => {
        const errorMessage = "This is not working...";
        showError(errorMessage);
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph.textContent).toBe(errorMessage);
    });
});
