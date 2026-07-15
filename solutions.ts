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

// problem 4

function getProperty<T, K extends keyof T> (object: T, key: K) : T[K] {
    return object[key]
}

// const user = { id: 1, name: "John Doe", age: 21 };
// const owner = { id: 2, name: "Akash", age: 22 };

// console.log(getProperty(user, "id"));
// console.log(getProperty(user, "name"));
// console.log(getProperty(user, "age"));
// console.log(getProperty(owner, "id"));
// console.log(getProperty(owner, "name"));
// console.log(getProperty(owner, "age"));


// problem 5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus (book : Book) {
    const bookAfterReading = {...book, isRead: true}
    return bookAfterReading
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));