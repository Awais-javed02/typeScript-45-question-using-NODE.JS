let x = 5;
let y = 10;
let name = 'Alice';
let isAdmin = true;
let fruits: string[] = ['apple', 'banana', 'orange'];
let emptyArray: string[] = [];

// Test 1
console.log("Is x == 5? I predict True.");
console.log(x == 5);

// Test 2
console.log("Is y != 10? I predict False.");
console.log(y != 10);

// Test 3
console.log("Is name === 'Alice'? I predict True.");
console.log(name === 'Alice' );

// Test 4
console.log("Is isAdmin !== false? I predict True.");
console.log(isAdmin !== true);

// Test 5
console.log("Is fruits.includes('banana')? I predict True.");
console.log(fruits.includes('banana'));

// Test 6
console.log("Is x > y? I predict False.");
console.log(x > y);

// Test 7
console.log("Is emptyArray.length === 0? I predict True.");
console.log(emptyArray.length === 0);

// Test 8
console.log("Is name !== 'Bob'? I predict True.");
console.log(name !== 'Bob');

// Test 9
console.log("Is isAdmin === true? I predict True.");
console.log(isAdmin === true);

// Test 10
console.log("Is fruits.includes('grape')? I predict False.");
console.log(fruits.includes('grape'));
