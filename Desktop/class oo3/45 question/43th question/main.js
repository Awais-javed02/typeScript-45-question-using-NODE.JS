//Define the function  to show magicains names 
function show_magicains(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
// FUNCTION TO MAKE MAGICAINS GREAT  THROUGH TH AT .MAP()IT WILL MODIFY ARRAY
function make_great(magicains) {
    return magicains.map(function (name) { return " The Great ".concat(name); });
}
// Define an array  of magicains  names
var magicians_names = ["Harry porter", "Awais", "Anus"];
//making a copy of orginal  array through  .slice() function
var copy_magicain_names = magicians_names.slice();
//modify the     copied  array to  inculde "the Great with their names"
var copy_great_magicians = make_great(copy_magicain_names);
// show both  arrays  original  and copied 
// original 
show_magicains(magicians_names);
//copied 
show_magicains(copy_great_magicians);
