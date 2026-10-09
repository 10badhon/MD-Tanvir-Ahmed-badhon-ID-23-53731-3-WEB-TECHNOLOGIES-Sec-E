const prompt = require("prompt-sync")();

let name = prompt("enter student name :");
let age = parseInt(prompt("enter student age : "));
let cgpa = parseFloat(prompt("Enter student cgpa : "));
let student_status = (prompt("are you student ? (true/false)") === "true");
let grade = prompt("enter your grade (A/B/C):").charAt(0);

console.log("student information: ");
console.log("name "+name);
console.log("cgpa "+cgpa);
console.log("student status "+student_status);
console.log("grade "+grade);

let course = [ "web technology" , "oop" ,"database"];

console.log("course names :");

for(let i=0; i<course.length; i++){
  console.log(course[i]);
}

let marks = parseInt(prompt("enter student marks : "));

if(marks >=80){
  console.log("grade; A+");
}
else if(marks >=70){
  console.log("grade: A");
}
else if ( marks>=60){
  console.log("grade: B");
}
else if ( marks<60){
  console.log("grade: F");
}

function showstudent(name, age){
  console.log("student name "+ name);
  console.log("student age "+age);
}
showstudent(name , age);


let student =[];
for (let i=0; i<3; i++){
  student[i] = prompt("enter student name  :");
}

console.log("student name : ");
for(let i=0; i<student.length; i++){
  console.log(student[i]);
}