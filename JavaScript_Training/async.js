// 
const mypromise=new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("Promise resolved");
},2000);
});
mypromise.then((result)=>{
    console.log(result);
});
mypromise.catch((error)=>{
    console.log(error);
});