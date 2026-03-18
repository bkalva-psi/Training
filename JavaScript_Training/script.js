console.log("Welcome to JavaScript World");
const p1=document.getElementById("p1");
const button1=document.getElementById("button1");
button1.addEventListener("click",function(){
p1.innerHTML="Namaste from JavaScript";
});
const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const result=document.getElementById("result");
const clearButton=document.getElementById("clearButton");
clearButton.style.display="none";
clearButton.innerHTML="Clear Result";

const addButton=document.getElementById("addButton");
addButton.addEventListener("click",function(){
    const sum=Number(num1.value)+Number(num2.value);
    document.getElementById("result").innerHTML="The sum is: "+sum+"!";
    clearButton.style.display = "block";
});
const subtractButton=document.getElementById("subtractButton");
subtractButton.addEventListener("click",function(){
    
    const diff=Number(num1.value)-Number(num2.value);
    document.getElementById("result").innerHTML="The diff is: "+diff+"!";
    clearButton.style.display = "block";
});
const multiplyButton=document.getElementById("multiplyButton");
multiplyButton.addEventListener("click",function(){
    const product=Number(num1.value)*Number(num2.value);
    document.getElementById("result").innerHTML="The product is: "+product+"!";
    clearButton.style.display = "block";
});
const divideButton=document.getElementById("divideButton");
divideButton.addEventListener("click",function(){
    if(Number(num2.value)==0){
        document.getElementById("result").innerHTML="Cannot divide by zero!";
    }
    else{
    const quotient=Number(num1.value)/Number(num2.value);
    document.getElementById("result").innerHTML="The quotient is: "+quotient+"!";
    }
    clearButton.style.display = "block";
    });

clearButton.addEventListener("click",function(){
    num1.value="";
    num2.value="";
    document.getElementById("result").innerHTML="";
});