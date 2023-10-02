//Problem 1- Number of Students Doing Homework at a Given Time
var busyStudents=function(startTime,endTime,queryTime){
    let studentsCount=0;
    for(let i=0;i<startTime.length;i++){
        if(startTime[i]<=queryTime && endTime[i]>=queryTime){
            studentsCount++;
        }
    }
    return studentsCount;
}

let stTime=[1,2,3];
let endTme=[3,5,7];
let queryTime=4;
var result=busyStudents(stTime,endTme,queryTime);
console.log("The number of students doing homework at given time = ",result);