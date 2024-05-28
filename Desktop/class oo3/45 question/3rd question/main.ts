
// Function to convert a string to title case more simply
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

// Declare a variable to store the name
let personName: string = "awais";

// Print the name in lowercase
console.log(personName.toLowerCase()); // AWAIS 

// Print the name in uppercase
console.log(personName.toUpperCase()); // AWAIS

// Print the name in title case
console.log(toTitleCase(personName)); // AWAIS
