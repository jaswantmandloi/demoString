export function getSumFromString(stringToBeParsed: string): number {
    if (stringToBeParsed.length === 0) {
        return 0;
    }
    
    const stringNumbers = stringToBeParsed.match(/-?\d+/g) || []
    const numbers = stringNumbers.map(Number)
    const negativeNumbers =  numbers.filter(number => number < 0)
    const hasNegativeNumbers = negativeNumbers.length > 0

    if(hasNegativeNumbers) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`)
    }

    
    if (numbers.length === 1) {
        return numbers[0];
    }

    const sum = numbers.reduce((acc, curr) => {
        const currNumber = curr;
        if (isNaN(currNumber)) {
            return acc;
        }
        return acc + currNumber;
    }, 0);
    return sum;
}

