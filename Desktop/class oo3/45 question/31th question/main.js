var userNames = ["Admin", "Awais", "Mohib", "Abu baker", "Usman"];
if (userNames.length === 0) {
    console.log(" your array is empty, We need to find some users!");
}
else {
    //using for each 
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like  see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank You  for logging in again"));
        }
    });
}
