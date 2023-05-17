import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
    if (!value) {
        throw Error("No argument was provided...");
    }

    return +value;
}

export const cleanNumbers = (numbers) => {
    const output = [];

    for (const value of numbers) {
        validateStringNotEmpty(value);
        const number = transformToNumber(value);
        validateNumber(number);
        output.push(number);
    }

    return output;
};
