let userName = ["Admin","Awais","Mohib","Abu baker","Usman"];

userName.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like  see a status report?`)
    }else {
        console.log(`Hello ${oneUser},thank You  for logging in again`)
    }
}
)

