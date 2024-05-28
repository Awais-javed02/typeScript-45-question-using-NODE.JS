//Define variables
let apple = "Apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Mango" , "banana", "Orange"];
//Test for equality and inequality ith strings

console.log ("Is  apple is equal to the apple?");
    console.log(apple == "Apple");

console.log("\n Is apple is not  equal to apple?");
console.log(apple != "Apple");

//Test using LowerCase function 
console.log("Is APPLE is equal to apple after converting  to lowerCase");
console.log(uppercaseApple.toLowerCase() != "Apple");

console.log("Is APPLE is not equal to apple after converting  to lowerCase");
console.log(uppercaseApple.toLowerCase() == "Apple");

//numericals test
//EQUAL TO 
console.log("\nIs ten is  equal to the twenty?");
console.log(twenty == ten);

//Not equal TO     

console.log ("\nIs ten in not equal to the twenty ?");
console.log(ten != twenty);

//Greter then

console.log("\nIs ten is greter then zero");
console.log(ten > 0)

//LESS THEN
console.log ("\n twenty is less then 10");
console.log(twenty < 10)

//GRETER THEN    OR EQUAL TO

console.log("\nIs ten is greter then r is equal to 5?")
console.log(ten >= 5);

//LESS THEN OR EQUAL TO 

console.log("\nIs twenty is less then or is equal to 10 ")
console.log(twenty <= 10);

//tests using end  or r operator 

//USING  &&(AND)
console.log("\n   twenty is not equal to 10 and twenty is greter then 10  ");
console.log(twenty != 10 && twenty > 10 );


console.log("\n   twenty is not equal to 10 and twenty is greter then 10  ");
console.log(twenty != 10 && twenty > 10 );

//USING || (OR)

console.log("n 20 is greter then 50  OR 20 is equal to 20");
console.log(20 > 50 ||   20 == 20);

console.log("n 20 is greter then 50  OR 20 is not equal to 20");
console.log(20 > 50 ||   20 != 20);

//TES WHETHER  AN ITEM IS INCLUDE IN ARRAY
console.log("\nis orange is not equal to my  fruits array "); 
console.log(fruits.includes ("Orange"));

//NOT INCLUDE
console.log("\nis orange is not equal to my  fruits array "); 
console.log(!fruits.includes ("Orange"));
