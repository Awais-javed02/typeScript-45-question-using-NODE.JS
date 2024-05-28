// List of places
let places: string[] = ["Paris", "Egypt", "Tokyo", "Australia", "New York"];

// Printing the list in its original order
console.log("Original order:");
console.log(places);

// Printing the list in alphabetical order without modifying the actual list
console.log("\nIn alphabetical order:");
console.log([...places].sort());

// Verifying that the list is still in its original order
console.log("\nOriginal order:");
console.log(places);

// Printing the list in reverse alphabetical order without changing the order of the original list
console.log("\nIn reverse alphabetical order:");
console.log([...places].sort().reverse());

// Verifying that the list is still in its original order
console.log("\nOriginal order:");
console.log(places);

    // Reversing the order of the list
console.log("\nReversed order:");
places.reverse();
console.log(places);

// Reversing the order of the list again to return to its original order
console.log("\nOriginal order:");
places.reverse();
console.log(places);

// Sorting the list in alphabetical order
console.log("\nSorted in alphabetical order:");
console.log([...places].sort());

// Sorting the list in reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log([...places].sort().reverse());

