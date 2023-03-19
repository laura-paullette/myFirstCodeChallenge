//Student Grade Generator

//This is a code that generates student grades depending on input marks
//promps user to enter score that ranges between 0 to 100
let score = 0 <= 100;

let studentMark = prompt(parseInt(score));

if ( studentMark > 79) {
    console.log("A");
}
else if (studentMark <= 79 && studentMark >= 60) {
    console.log("B")
}
else if (studentMark <= 59 && studentMark >= 50) {
    console.log("C");
}
else if (studentMark <= 49 && studentMark >= 40) {
    console.log("D");
}
else if (studentMark <= 39  && studentMark >= 0 ){
    console.log("E");
}
// if the user enters a mark that does not fall within the 0-100 range, they will be prompted to input a mark 
// that will fall within the range and try again
else {
  console.log("Invalid score! Try again");
  }
