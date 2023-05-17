export const generateResultText = (input) => {
    let resultText = "";

    if (input === "invalid") {
        resultText = "Invalid input. You must enter valid numbers.";
    } else if (input !== "no-calc") {
        resultText = "Result: " + input;
    }

    return resultText;
};

export const outputResult = (text) => {
    const output = document.getElementById("result");
    output.textContent = text;
};
