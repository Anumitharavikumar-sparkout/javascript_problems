let num = [1,2,2,3,4,5,5,5];
let unique = [];
let myfunction = () => 
{
    for(let i=0;i<num.length;i++)
    if(num[i] !== num[i+1])
    unique.push(num[i]);
} 
myfunction();
console.log(unique);