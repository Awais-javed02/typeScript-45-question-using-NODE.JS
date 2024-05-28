//define a functionwith a rest parametre  that accept items arguments representing our sandwich     

function make_sandwich (...items:  string []  ){
    console.log("Making  a sandwich  with the  following items: \n");
    items.forEach (singleItems  => console.log("_" + singleItems));
      console.log("\n Now enjoy sandwich");

}

//call the function three time with 3  different  number of argument
make_sandwich("Chicken","Chese"," Mayo","Egg");

make_sandwich("braed","Butter");

make_sandwich("Bread","Butter","Mayo","Egg","Chicken","lettuce","Tomato");