// Define the array of names
const names: string[] = ["Awais","Anus","Abu baker","Usman","Muzammil"];

// Define the message to be personalized
const message: string = "Hello, {name}! I hope you're having a great day.";

// Loop through the names and print personalized messages
names.forEach((name: string) => {
    console.log(message.replace("{name}", name));
});
