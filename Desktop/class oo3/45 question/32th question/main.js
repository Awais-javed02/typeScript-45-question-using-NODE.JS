//ARRAY OF CURRENT USERS
var current_user = ["Ayesha", "Awais", "Asif", "Ali", "Waniya"];
//ARRAY OF NEW USERS
var new_user = ["Hamza", "Ayesha", "Asif", "Shiba", "Fiza"];
//LOOP THROUGH NEW_USERS TO  CHECK FOR USERNAMES AVAILIBILTY
new_user.forEach(function (new_one_user) {
    //MAKING A CONDITIONFOR USERNSAME ALREADY   SAVE AND EXIST  IN OUR_condition VARAIBLE 
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //PRINT DIFFRENT MASSEGE USING IF_ELSE STATMENT
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, "is available"));
    }
});
