// Define arrays for different categories
const mountains: string[] = ["Everest", "K2", "Matterhorn", "Kilimanjaro"];
const rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi"];
const countries: string[] = ["USA", "China", "India", "Brazil"];
const cities: string[] = ["New York", "Tokyo", "Paris", "London"];
const languages: string[] = ["English", "Spanish", "Mandarin", "French"];

// Combine all arrays into one
const allItems: string[] = [...mountains, ...rivers, ...countries, ...cities, ...languages];

// Print the combined array
console.log(allItems);
