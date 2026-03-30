const students = [
    { name: 'Ravi', score: 85, city: 'Hyderabad' },
    { name: 'Priya', score: 92, city: 'Chennai' },
    { name: 'Amit', score: 67, city: 'Hyderabad' },
    { name: 'Sneha', score: 45, city: 'Mumbai' },
    { name: 'Karan', score: 78, city: 'Chennai' }
  ];
const studentNamesDOM=document.getElementById("studentNames");
const calculateButton=document.getElementById("calculateButton");
const totalScoreDOM=document.getElementById("totalScore");
const dropdown=document.getElementById("dropdown");
const filterButton=document.getElementById("filterButton");
const filteredStudentsDOM=document.getElementById("filteredStudents");
const summarisedStudentsDOM=document.getElementById("summarisedStudents");
calculateButton.addEventListener("click",calculateTotalScore);
function calculateTotalScore(){
    totalScoreDOM.innerHTML='The total score is: '+students.reduce((x,s)=>x+s.score,0);
}
function filterStudents(){
    filteredStudentsDOM.innerHTML=students.filter(student=>student.city===dropdown.value).map(student=>student.name).join(', ');
}
function summariseStudents(){
    summarisedStudentsDOM.innerHTML=
'the average is: '+students.reduce((x,s)=>x+s.score,0)/students.length+
'<br>the highest score is: '+students.reduce((x,s)=>x>s.score?x:s.score,0)+
'<br>the lowest score is: '+students.reduce((x,s)=>x<s.score?x:s.score,0);
}
// const studentNames=students.filter(student=>student.score>70 && student.city==='Chennai').map(student=> student.name).join(', ');
// const studentFind=students.find(student=>student.score==='100');
// const studentSort=students.sort((a,b)=>b.score-a.score).map(student=> student.name);
// var rank=1;
// studentSort.forEach(element => {
//     console.log(rank++);
// });
// console.log(studentFind);
// if(studentFind){
    
//     studentNamesDOM.innerHTML=studentFind.name;
// }else{
//     studentNamesDOM.innerHTML='No student found';
// }
// const studentReduce=students.reduce((x,s)=>x+s.score,0);
// console.log(studentReduce);