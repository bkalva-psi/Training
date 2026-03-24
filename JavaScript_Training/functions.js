const calculateTotal=(price,quantity)=>{
    return price*quantity};


const greetingOftheDay=(day)=>{
    if(day==="Morning"){
        return "Good Morning";
    }
    else if(day==="Afternoon"){
        return "Good Afternoon";
    }
    else if(day==="Evening"){
        return "Good Evening";
    }
    else if(day==="Night"){
        return "Good Night";
    }
}
const items=[];
// const itemInput=document.getElementById("itemlist");
function addItem(){
    const itemInput=document.getElementById("itemlist");
    const value=Number(itemInput.value);
    items.push(itemInput.value);
    document.getElementById("itemsbreakdownDetails").innerHTML="Items: "+items.join(', ');

    itemInput.value='';
    // console.log(items);
}
function calculateTip(){
    let tip=0;
    for(let i=0;i<items.length;i++){
        tip+=items[i]*0.1;
    }
    console.log(tip);
    document.getElementById("itemsbreakdownDetails").innerHTML="Items: "+items.join(', ')+"<br>Tip: "+tip;
    
}
// processNumbers(10,20,(x,y)=>{
//     console.log("The sum is: "+(x + y));
// });
// function processNumbers(a,b, callback){
//     console.log("Hello");
//     callback(a,b);
// }

function handleClick() {
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    const totalValue = calculateTotal(price, quantity);
    document.getElementById("total").innerHTML =
        "The total is: " + totalValue;
    console.log(totalValue);
    console.log(greetingOftheDay("Morning"));
}


