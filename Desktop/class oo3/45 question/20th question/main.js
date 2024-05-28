// Define arrays for different categories
const mountains = ["Everest", "K2", "Matterhorn", "Kilimanjaro"];
const rivers = ["Nile", "Amazon", "Yangtze", "Mississippi"];
const countries = ["USA", "China", "India", "Brazil"];
const cities = ["New York", "Tokyo", "Paris", "London"];
const languages = ["English", "Spanish", "Mandarin", "French"];
// Combine all arrays into one
const allItems = [...mountains, ...rivers, ...countries, ...cities, ...languages];
// Print the combined array
console.log(allItems);
export {};
