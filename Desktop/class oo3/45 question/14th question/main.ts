// Define the array of people to invite to dinner
const guestList: string[] = ["Albert Einstein", "Malala Yousafzai", "Leonardo da Vinci"];

// Define the invitation message
const invitationMessage: string = "Dear {guest}, I would be honored to have you join me for dinner. It would be a pleasure to spend time with someone as esteemed as yourself.";

// Loop through the guest list and print personalized invitation messages
guestList.forEach((guest: string) => {
    console.log(invitationMessage.replace("{guest}", guest));
});
