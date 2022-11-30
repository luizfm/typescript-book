// 3.1 - Boolean type

const complete: boolean = false;

// 3.2 Number type

const decimal: number = 6;
const hexadecimal: number = 0xf00d;
const binary: number = 0b1010;
const octagonal: number = 0o744;

// 3.3 String type + number example

const cor: string = "red";
const fullName: string = "Luiz Fernando de Morais";
const age: number = 27;

const sentence: string = `Hello, my name is ${fullName}. I'm going to have ${
  age + 1
} on my next birthday!`;

// 3.4 Array type

const list: number[] = [1, 2, 3, 4];
const anotherList: Array<number> = [1, 2, 3, 4];

// Both are equivalent

// 3.5 Tuple type

let x: [string, number];
x = ["one", 2]; // This one will work
// x = [1, "two"]; // This one will produce an error of types

// 3.6 Enum type

enum MyColorOne {
  Red,
  Green,
  Blue,
}
const color1: MyColorOne = MyColorOne.Green;

enum MyColorTwo {
  Red = 1,
  Green,
  Blue,
}
const color2: MyColorTwo = MyColorTwo.Green;

enum MyColorThree {
  Red = 1,
  Green = 2,
  Blue = 4,
}
const color3: MyColorThree = MyColorThree.Green;

enum MyColorFour {
  Red = 1, // When setting Red to be 1, it will add a new order to the enum list, starting from 1
  Green,
  Blue,
}

const colorName: string = MyColorFour[0]; // This will return undefined
const colorNameTwo: string = MyColorFour[1]; // This will return Red

console.log(colorName);
console.log(colorNameTwo);

// 3.7 Any type

// Any is used to type variables that you don't have an idea about what they are or dynamic values

let doNotKnow: any = 4;
doNotKnow = "An any string"; // Will not produce an Error
doNotKnow = false; // It also will not produce an Error

const anyList: any[] = [1, true, "I don't know the value"];

// 3.8 Void type

// void is normally attributed to functions that doesn't return anything
// There is no gain to set a variable with that, since it will only be possible to be undefined

function printSomething(): void {
  console.log("Printing anything for void example");
}
printSomething();
let anything: void = undefined;

// 3.8 Assertions type

// There is two ways to do that:

// Angle bracket

const example: any = "This is a string";
const stringLength: number = (<string>example).length;

// as notation

const stringLengthTwo: number = (example as string).length;
