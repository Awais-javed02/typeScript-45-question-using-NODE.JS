//Define a  function to creat a car object   with optional options...
function creat_cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a cars   object with  manufucturer and models
    var cars = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional  options to the cars object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        cars[key.trim()] = value.trim();
    });
    return cars;
}
//call the  function  to creat a car object 
var my_cars = creat_cars("Toyata", "Supra", "color:Black", "sunroof: True");
// print the variable   to ensure   all information is storted correctly  in the  car object 
console.log(my_cars);
