//ARRAY OF CURRENT USERS
let current_user = ["Ayesha","Awais","Asif","Ali","Waniya"];

//ARRAY OF NEW USERS

let new_user = ["Hamza","Ayesha","Asif","Shiba","Fiza"];

//LOOP THROUGH NEW_USERS TO  CHECK FOR USERNAMES AVAILIBILTY

new_user.forEach(new_one_user => {
    //MAKING A CONDITIONFOR USERNSAME ALREADY   SAVE AND EXIST  IN OUR_condition VARAIBLE 
let  our_condition =  current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

//PRINT DIFFRENT MASSEGE USING IF_ELSE STATMENT
if(our_condition){
    console.log(`sorry ${new_one_user} is already taken!`)

}else {
    console.log(`this username ${new_one_user}is available`)
}

})
