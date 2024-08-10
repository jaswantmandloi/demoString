export function getSumFromString(stringToBeParsed: string): number {
    if (stringToBeParsed.length === 0) {
        return 0;
    }
    const commaMappedStringFromNewLines = stringToBeParsed.replaceAll("\n", ",");
    const numbers = commaMappedStringFromNewLines.split(",");
    if (numbers.length === 1) {
        return parseInt(numbers[0]);
    }

    const sum = numbers.reduce((acc, curr) => {
        const currNumber = parseInt(curr);
        if (isNaN(currNumber)) {
            return acc;
        }
        return acc + currNumber;
    }, 0);
    return sum;
}