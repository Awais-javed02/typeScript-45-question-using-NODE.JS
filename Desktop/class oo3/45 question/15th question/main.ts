// Current guest list
// let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];

// // Function to update the guest list
// function updateGuestList() {
//     let newGuest = prompt("Enter the name of the new guest:");
    
//     // Check if the new guest name is not empty
//     if (newGuest !== null && newGuest.trim() !== "") {
//         // Add the new guest to the guest list
//         guestList.push(newGuest);
        
//         // Display the updated guest list
//         console.log("Updated Guest List:");
//         guestList.forEach((guest, index) => {
//             console.log(index + 1 + ". " + guest);
//         });
//     } else {
//         console.log("No new guest added.");
//     }
// }

// // Call the function to update the guest list
// updateGuestList();









// Current guest list
let guestList: string[] = ["Zainab", "Ayesha", "Hani", "Mohib", "Abu Baker"];

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
