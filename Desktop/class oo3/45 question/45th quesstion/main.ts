//Define a  function to creat a car object   with optional options...
function creat_cars(manufacturer, model,  ...options){
    //initialize a cars   object with  manufucturer and models
    let cars = {
        manufacturer: manufacturer,
        model:model
    };

    //Add additional  options to the cars object
options.forEach(option => {
    let [key, value] =  option.split(":");
    cars [ key.trim()] =  value.trim();
}) 
 
return cars;

}

//call the  function  to creat a car object 
let my_cars = creat_cars ("Toyata","Supra","color:Black","sunroof: True");

// print the variable   to ensure   all information is storted correctly  in the  car object 

console.log(my_cars);