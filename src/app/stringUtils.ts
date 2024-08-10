export function getSumFromString(stringToBeParsed: string): number {
    if (stringToBeParsed.length === 0) {
        return 0;
    }
    const numbers = stringToBeParsed.split(",");
    if (numbers.length === 1) {
        return parseInt(numbers[0]);
    }
    const sum = numbers.reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0);
    return sum;
}