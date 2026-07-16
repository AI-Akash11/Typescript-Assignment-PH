## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

---

## Introduction

Generics are one of the most powerful features of TypeScript. They allow developers to write reusable code while maintaining strict type checking. Instead of writing separate functions for different data types, one generic function can work with many types safely.

---

## What Are Generics?

A generic is a placeholder for a type.

Instead of specifying the type immediately, we use a type parameter.

---

## Example

```ts
function identity<T>(value: T): T {
    return value;
}
```

> Here, `T` represents the type that will be provided when the function is called.

---

## Example

```ts
identity<string>("Hello");
identity<number>(10);
```

> The same function works with different types while preserving type safety.

---

## Generic Function Example

A practical example is accessing a property from an object.

---

## Example

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
```

---

## Example

```ts
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};

getProperty(user, "name");
```

### Output

```text
John Doe
```

> The compiler prevents accessing properties that do not exist.

---

## Benefits of Generics

- Reduce code duplication
- Improve code reusability
- Maintain strong type safety
- Catch errors during compilation
- Work with different data types using one implementation

---

## Conclusion

Generics make TypeScript code flexible without sacrificing type safety. They are especially useful when building reusable functions, classes, libraries, and APIs.