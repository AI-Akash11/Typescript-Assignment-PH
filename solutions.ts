// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// console.log(filterEvenNumbers([1, 12, 33, 40, 25, 16, 11, 18, 24]))

// Problem 2

function reverseString(string: string): any {
  return string.split("").reverse().join("");
}

// console.log(reverseString('akash assignment 1'))

// Problem 3

type TStringOrNumber = string | number;

function checkType(input: TStringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// console.log (checkType("Hello"))
// console.log(checkType(42))