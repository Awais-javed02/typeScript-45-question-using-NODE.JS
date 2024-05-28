// Current guest list
let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Name of the guest who can't make it
const cantMakeIt: string = "Charlie";

// Name of the new person you are inviting
const newInvitee: string = "Frank";

// Print the name of the guest who can't make it
console.log(`${cantMakeIt} can't make it.`);

// Replace the name of the guest who can't make it with the name of the new person
const index = guestList.indexOf(cantMakeIt);
if (index !== -1) {
    guestList[index] = newInvitee;
}

// Print a second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner party!`);
});

// More space available, so adding three more guests
const additionalGuests: string[] = ["Grace", "Harry", "Ivy"];

// Add one new guest to the beginning of the array
guestList.unshift(additionalGuests[0]);

// Add one new guest to the middle of the array
guestList.splice(Math.ceil(guestList.length / 2), 0, additionalGuests[1]);

// Use push() to add one new guest to the end of your list
guestList.push(additionalGuests[2]);

// Print a message informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Print a new set of invitation messages
console.log("New set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner party!`);
});

// Shrinking the guest list
console.log("Sorry, we can only invite two people for dinner.");

while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the remaining two guests
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to the dinner party!`);
});

// Empty the guest list
guestList = [];

// Print to confirm an empty list
console.log("Updated guest list:", guestList);
