var userName = ["Admin", "Awais", "Mohib", "Abu baker", "Usman"];
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like  see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank You  for logging in again"));
    }
});
