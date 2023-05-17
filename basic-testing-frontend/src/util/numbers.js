import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
    return +value;
}

export const cleanNumbers = (numbers) => {
    const output = [];

    for (const value of numbers) {
        if (typeof value === "string") {
            validateStringNotEmpty(value);
        }

        const number = transformToNumber(value);
        validateNumber(number);
        output.push(number);
    }

    return output;
};
