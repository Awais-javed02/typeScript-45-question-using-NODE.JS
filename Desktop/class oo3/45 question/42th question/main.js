//Define the function  to show magicains names 
function show_magicains(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
function make_great(magicains) {
    return magicains.map(function (name) { return " The Great ".concat(name); });
}
// Define an array  of magicains  names
var magicians_names = ["Harry porter", "Awais", "Anus"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
show_magicains(great_magicians);
