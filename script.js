let fruits = ["mango", "apple", "orange", "strawberrie", "lemon"];

// toString()
let to_String = fruits.toString();
console.log(to_String);

// join()
let joinn = fruits.join(" /*/ ");
console.log(joinn);

//pop()
let popedItem = fruits.pop();
console.log(popedItem);
console.log(fruits);

//shift()
let shiftItem = fruits.shift();
console.log(shiftItem);
console.log(fruits);

//push()
let pushItem = fruits.push("banana");
console.log(pushItem);
console.log(fruits);

//unShift()
let unShiftItem = fruits.unshift("Banana");
console.log(unShiftItem);
console.log(fruits);

// concat()
let fruit1 = ["Banana", "Apple"];
let fruit2 = ["Mango", "Orange"];
let fruit3 = ["Strawberrie", "lemon"];
let fruit4 = ["Kiwi", "Pineapple"];

let concatTwo = fruit1.concat(fruit2);
console.log(concatTwo);
console.log(fruit1);

let concatAll = fruit1.concat(fruit2, fruit3, fruit4);
console.log(concatAll);
console.log(fruit1);

//splice()
let spliceItem = fruits.splice(2, 0, "kiwi", "pineapple");
console.log("1: ", spliceItem);
console.log(fruits);

let spliceItem2 = fruits.splice(2, 2, "emil", "linus");
console.log("2: ", spliceItem2);
console.log(fruits);

let spliceItem3 = fruits.splice(0, 3);
console.log("3: ", spliceItem3);
console.log(fruits);

//slice()
let sliceFruits1 = fruits.slice(1);
let sliceFruits2 = fruits.slice(1, 3);
let sliceFruits3 = fruits.slice(0, 2);
console.log(fruits);
console.log(sliceFruits1);
console.log(sliceFruits2);
console.log(sliceFruits3);

//sort()
let numbers = [3, 4, 7, 1, 2];
console.log(numbers.sort());
