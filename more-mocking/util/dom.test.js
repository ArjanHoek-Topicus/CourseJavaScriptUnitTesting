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
    beforeEach(() => {
        document.body.innerHTML = "";
        document.write(htmlDocumentContent);
    });

    it("should add an error paragraph to the errors container element", () => {
        showError("This is not working");

        const errorsEl = document.getElementById("errors");
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).not.toBeNull();
    });

    it("should not contain an error paragraph initially", () => {
        const errorsEl = document.getElementById("errors");
        const errorParagraph = errorsEl.firstElementChild;

        expect(errorParagraph).toBeNull();
    });
});
