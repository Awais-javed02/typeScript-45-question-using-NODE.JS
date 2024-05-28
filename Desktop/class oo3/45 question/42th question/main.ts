//Define the function  to show magicains names 
function show_magicains (magicains:string[]){
    magicains.forEach(name => console.log(name));
}
// FUNCTION TO MAKE MAGICAINS GREAT  THROUGH TH AT .MAP()IT WILL MODIFY ARRAY

function make_great(magicains: string[]){
   return magicains.map(name => ` The Great ${name}`)
}

// Define an array  of magicains  names
let  magicians_names = ["Harry porter","Awais","Anus"]

// CALL MAKE_GREAT  FUNCTION  TO MODIFY      MAGICAINS NAME 

 let great_magicians = make_great(magicians_names);

//CALL SHOW  MAGICAINS THAT SHOW MODIFIED  LIST OF MAGICAINS 

 console.log(great_magicians);

 show_magicains(great_magicians);
