// Define objects for different countries
const countriesInfo = {
    "USA": { capital: "Washington D.C.", population: 331000000, language: "English" },
    "China": { capital: "Beijing", population: 1441000000, language: "Mandarin" },
    "India": { capital: "New Delhi", population: 1380000000, language: "Hindi" },
    "Brazil": { capital: "Brasília", population: 212000000, language: "Portuguese" }
};
// Accessing information about specific countries
console.log("Information about USA:");
console.log("Capital:", countriesInfo["USA"].capital);
console.log("Population:", countriesInfo["USA"].population);
console.log("Language:", countriesInfo["USA"].language);
console.log("\nInformation about China:");
console.log("Capital:", countriesInfo["China"].capital);
console.log("Population:", countriesInfo["China"].population);
console.log("Language:", countriesInfo["China"].language);
export {};
