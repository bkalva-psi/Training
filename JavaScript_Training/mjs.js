const obj={
    name:"Ravi",
    age:22,
    city:"Hyderabad",
    hobbies:['Coding', 'gaming'],
    greet:function(){
        console.log("Hello, I am "+this.name);
    }
}
const editedField="city";
const editedValue="New York";
const displayname=obj.username?.name??'Guest';
console.log(displayname);
const updatedobj={...obj,
    [editedField]:editedValue
    };
    console.log(updatedobj);
// displayUserInfo(obj);
// function displayUserInfo({name,age,city,hobbies})
// {
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(hobbies);
// }
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(hobbies);
// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,10];
// const arr3=[...arr1,...arr2];
// console.log(arr3);
// function sum(numbers){
//     return numbers.reduce((x,y)=>x+y,0);
// }
// console.log(sum([1]));
