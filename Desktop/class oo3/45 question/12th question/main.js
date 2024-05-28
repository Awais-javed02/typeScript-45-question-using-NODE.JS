// Define the array of names
const names = ["Awais", "Anus", "Abu baker", "Usman", "Muzammil"];
// Define the message to be personalized
const message = "Hello, {name}! I hope you're having a great day.";
// Loop through the names and print personalized messages
names.forEach((name) => {
    console.log(message.replace("{name}", name));
});
export {};
