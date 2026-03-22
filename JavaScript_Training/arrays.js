// const user={
//     name:"Ravi",
//     age:"22",
//     city:"Hyderbad",
//     hobbies:['Coding', 'gaming']
// }
// const datacard=document.getElementById("datacard");

//     datacard.innerHTML=`<p>Name: ${user.name}</p>
//     <p>Age: ${user.age}</p>
//     <p>City: ${user.city}</p>
//     <p>Hobbies: ${user.hobbies.join(', ')}</p>
//     `
//     ;
// const String_methods_dom=document.getElementById("String-methods");
// var string1='JavaScript is fabulous';
// String_methods_dom.innerHTML=`<p>Length: ${string1.length}</p>
// <p>Uppercase: ${string1.toUpperCase()}</p>
// <p>Lowercase: ${string1.toLowerCase()}</p>
// <p>Includes: ${string1.includes('awesome')}</p>
// <p>Replace: ${string1.replace('fabulous','awesome')}</p>
// `;
// console.log(string1.length);
// console.log(string1.toUpperCase());
// console.log(string1.toLowerCase());
// console.log(string1.includes('awesome'));
// console.log(string1.replace('fabulous','awesome'));
// 
let rollCounter=0;
function rollDice(){
    const dice_result=document.getElementById("dice-result");
    dice_result.innerHTML=`<p>Dice Result: ${Math.floor(Math.random()*6)+1}</p>`;
    const rollCount=document.getElementById("roll-count");
    rollCounter++;
    rollCount.innerHTML=`<p>Roll Count: ${rollCounter}</p>`;

}