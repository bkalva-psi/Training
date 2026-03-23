let shoppingList=['Milk', 'Bread', 'Butter', 'Cheese'];
function RenderShoppingList(){
    const shoppingListElement=document.getElementById("shopping-list");
    shoppingListElement.innerHTML='';
    shoppingList.forEach(function(item){
        shoppingListElement.innerHTML+=`<li>${item} <button onclick="RemoveItemFromShoppingList('${shoppingList.indexOf(item)}')">Remove</button></li> `;
        document.getElementById("counter").innerHTML=`<p>Number of items: ${shoppingList.length}</p>`;
    });
}
RenderShoppingList();
function AddItemToShoppingList(){
const itemInput=document.getElementById("item-input");
if(itemInput.value===''){
    alert("Please enter an item");
    return;
}
const newItem=itemInput.value;
shoppingList.push(newItem);
itemInput.value='';
RenderShoppingList();
}
function RemoveItemFromShoppingList(index){
    shoppingList.splice(index,1);
    document.getElementById("counter").innerHTML=`<p>Number of items: ${shoppingList.length}</p>`;
    RenderShoppingList();
}
function SortShoppingList(){
    shoppingList.sort();
    RenderShoppingList();
}
function SortShoppingListInReverse(){
    shoppingList.reverse();
    RenderShoppingList();
}