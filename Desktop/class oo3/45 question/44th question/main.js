//define a functionwith a rest parametre  that accept items arguments representing our sandwich     
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making  a sandwich  with the  following items: \n");
    items.forEach(function (singleItems) { return console.log("_" + singleItems); });
    console.log("\n Now enjoy sandwich");
}
//call the function three time with 3  different  number of argument
make_sandwich("Chicken", "Chese", " Mayo", "Egg");
make_sandwich("braed", "Butter");
make_sandwich("Bread", "Butter", "Mayo", "Egg", "Chicken", "lettuce", "Tomato");
