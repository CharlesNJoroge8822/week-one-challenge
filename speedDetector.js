// CHALLENGE 2.. SPEED DETECTOR.................... ................................................................................................................................................................................................................................................................
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”.
//  Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

// Initial car speed here
let car_speed = 97;

const speed_limit = 70;

//pass a function that will recognizes speed of a car
function recognize_car_speed (){

    let demerit_points = 0;
     //determine if car is on speed limit
    if (car_speed <= speed_limit){
        return "Ok";//return ok if its within the limit
    }
    // else. if speed aint 70, then claculate demerit points using this function
    else {

    demerit_points = Math.floor ((car_speed - speed_limit)/5);
        // print the total demerit points so we will use them to determine the outcome of car speed..
        //look if demerit points are beyond 12
        if (demerit_points > 12){
            // return "License suspended"; //+ demerit_points;
    }
    return `demerit_points: ${demerit_points}. License supended`;//return demeerit points and the license suspended results
    }
     // set another conditional statement to suspend the driver's license
       return `Demerit points: ${demerit_points}`;//return the demerit points only

}

console.log(recognize_car_speed());




