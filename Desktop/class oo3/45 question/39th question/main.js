//Craeting a function  with  parametres  which return value   in string
function city_country(city, country) {
    return "".concat(city, " ,  ").concat(country);
}
//Calling the function  and print the return value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Tokya", "japan"));
console.log(city_country("berlin", "Germany"));
