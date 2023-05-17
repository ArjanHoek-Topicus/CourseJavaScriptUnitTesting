export function transformToNumber(value) {
    if (!value) {
        throw Error("No argument was provided...");
    }

    return +value;
}
