const incrementButton=document.getElementById("incrementButton");
const decrementButton=document.getElementById("decrementButton");
const resetButton=document.getElementById("resetButton");
const count=document.getElementById("count");
const mouseMoveDiv=document.getElementById("mouseMoveDiv");
const mouseMoveX=document.getElementById("mouseMoveX");
const mouseMoveY=document.getElementById("mouseMoveY");
const list=document.getElementById("list");
const result=document.getElementById("result");

let countValue=Number(count.innerHTML);
    incrementButton.addEventListener("click",()=>{
        countValue++;
        count.innerHTML=countValue;
    });
    incrementButton.addEventListener("keyup",()=>{
        countValue++;
        count.innerHTML=countValue;
    });
    decrementButton.addEventListener("click",()=>{
        countValue--;
        count.innerHTML=countValue;
    });
    
    decrementButton.addEventListener("keydown",()=>{
        countValue--;
        count.innerHTML=countValue;
    });
resetButton.addEventListener("click",()=>{
    countValue=0;
    count.innerHTML=countValue;
});
mouseMoveDiv.addEventListener("mousemove",e=>{
    console.log(e);
    mouseMoveX.innerHTML=`The x coordinate is ${e.clientX}`;
    mouseMoveY.innerHTML=`The y coordinate is ${e.clientY}`;
})
list.addEventListener("click",e=>{
    if(e.target.matches("li")) 
    {
        console.log(e.target.innerHTML);
        result.innerHTML=`The item is ${e.target.innerHTML}`;
    }
}
)

