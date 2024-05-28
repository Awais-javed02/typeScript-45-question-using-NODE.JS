// making a Function 
function make_shirt (size: string = "Large",printMessage: string = "I love type sciprt"){
    console.log(`Creating ${size} shirt with ${printMessage} prints on shirt `)
}
// calling a function with by default value

make_shirt ();

//calling a function with by default value
make_shirt("Medium");

//calling a function with diffrent print message  and small size 
make_shirt("Small","I love Java script");