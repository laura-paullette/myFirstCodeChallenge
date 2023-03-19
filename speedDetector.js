//speed detector code solution.

//this takes in the speed of a car as input
//if the speed is < 70 it prints "OK" 
//otherwise, for every 5km/s above the limit it gives the driver a demerit point and prints the total number of points
//if the driver gets more than 12 points, function prints "license suspended"


function speedOfCar(){
    let speedOfCar = 70;
  let demeritPoints = (speedOfCar - 70)/5;
  // "if statement" that will print "Ok" if the car speed is equal to or less than 70km/s
  if(speedOfCar <= 70){
      console.log("OK");
  }
  // "else if" to print the number of demerits if the car speed exceeds the base speed by 5km/s 
  //if demerit points exceed 12, prints "License suspended"
  else{
    console.log(`Points: ${demeritPoints}`);
    if(demeritPoints > 12){
      console.log("License suspended");
    }
  }
  }
  speedOfCar();