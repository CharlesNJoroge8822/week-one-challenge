// Challenge 1.. STUDENT GRADE GENERATOR..
// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

//Use let to set the student score 
let student_mark = 120;

//Set <=100 to limit score above 100 which is invalid...
if (student_mark > 79 && student_mark <= 100){
    console.log("A");

}
// Use && operator to limit score within the gap of 60 to 79
else if (student_mark >= 60 && student_mark <= 79){
    console.log("B");
    
}
// Use && operator to limit score within the gap of 49 to 59
else if (student_mark >= 49 && student_mark <= 59){
    console.log("C");
    
}
// Use && operator to limit score within the gap of 40 to 49
else if (student_mark >= 40 && student_mark <= 49){
    console.log("D");
    
}
// Use && operator to limit score within the gap of 0 to 40
else if (student_mark < 40 && student_mark >=0){
    console.log("E");
    
}
// else will denie any other score beyond 0 to 100
else{
    console.log("Invalid Input");}


















    