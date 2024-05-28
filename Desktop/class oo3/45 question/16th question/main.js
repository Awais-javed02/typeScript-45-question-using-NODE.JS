// Current guest list
let guestList = ["Awais", "Bint -e- hawa", "faiza", "shezzy", "amir"];
// Name of the guest who can't make it
const cantMakeIt = "Charlie";
// Name of the new person you are inviting
const newInvitee = "Frank";
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
const additionalGuests = ["Muzammil", "Haris", "Junaid"];
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
export {};
