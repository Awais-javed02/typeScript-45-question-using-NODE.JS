// Guest list
let guests: string[] = ["Awais", "Zainab", "Shezy", "Hani", ];

// Printing the message that only two people can be invited
console.log("Sorry, the dinner table won't arrive in time. I can only invite two people for dinner.");

// Removing guests until only two names remain
while (guests.length > 2) {
    console.log(`Sorry ${guests.pop()}, I can't invite you to dinner.`);
}

// Printing invitations for the remaining two guests
for (const guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Removing the last two names from the list (optional, since the program is ending anyway)
guests.pop();
guests.pop();

// Printing the empty list
console.log("Final guest list:", guests);


// // Guest list
// let guests :  string [] = ["Alice", "Bob", "Charlie", "David", "Emma"];

// // Printing the message that only two people can be invited
// console.log("Sorry, the dinner table won't arrive in time. I can only invite two people for dinner.");

// // Removing guests until only two names remain
// while (guests.length > 2) {
//     console.log(`Sorry ${guests.pop()}, I can't invite you to dinner.`);
// }

// // Printing invitations for the remaining two guests
// for (const guest of guests) {
//     console.log(`Dear ${guests}, you're still invited to dinner.`);
// }

// // Removing the last two names from the list (optional, since the program is ending anyway)
// guests.pop();
// guests.pop();

// // Printing the empty list
// console.log("Final guests list:", guests);
