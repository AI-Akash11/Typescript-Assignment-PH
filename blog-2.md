How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

--- Introduction

Typescript helps developers write safer Javascript by adding static types. However, TypeScript also provides the any type, which disables type checking completely. Although any can be useful in certain situations, it can also introduce bugs that TypeScript is designed to prevent. In many cases, the unknown type is a sager alternative because it forces developer to verifgy the data before using it.

--- Understanding any

The any type tells TypeScript to ignore type checking for a value. Once a variable is declared as any, any operation can be performed on it without producing compiler errors.

--- example:
let value: any = "Hello";
value = 100;
value.toUpperCase(); // No error on compile time

Although this compiles successfully, it may cause runtime errors if the value is not actually a string.

Because any bypasses TypeScript's type checking, it is often called a type safety hole.

--- Understanding unknown

The unknown type can store any value, just like any, but it cannot be used until its type has been verified.


--- example:
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}

This makes the code much safer because TypeScript ensures that operations are only performed on values of the correct type.

--- Conclusion

While any completely disables type checking, unknown maintains type safety by requiring developers to verify data before using it. In most situations involving external or unpredictable data, unknown is the safer and recommended choice.