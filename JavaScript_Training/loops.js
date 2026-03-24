// function calculatetable(){
//     const input=document.getElementById("inputNumber");
//     const table=document.getElementById("table");
//     table.innerHTML="";
//     let i=1;
//     let number=Number(input.value);
//     do {
//         table.innerHTML+=`<tr><td>${number} x ${i} = ${number*i}</td></tr>`;
//         i++;
//     } 
//     while(i<=10);
//     // while(number>0){
//     //     table.innerHTML+=`<tr><td>${number} x ${i} = ${number*i}</td></tr>`;
//     //     number--;
//     // }
// }
const arr=['Pranav', 'Ravi', 'Rahul', 'Rajesh', 'Raj'];
for(let i=0;i<arr.length;i++){
    console.log(`${i+1}. ${arr[i]}`);
}