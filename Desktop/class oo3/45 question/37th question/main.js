// making a Function 
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love type sciprt"; }
    console.log("Creating ".concat(size, " shirt with ").concat(printMessage, " prints on shirt "));
}
// calling a function with by default value
make_shirt();
//calling a function with by default value
make_shirt("Medium");
//calling a function with diffrent print message  and small size 
make_shirt("Small", "I love Java script");
