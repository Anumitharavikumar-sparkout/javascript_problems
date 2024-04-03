let num = [2,4,6,8];
const x = 4;
let found = false;
for(let i = 0;i<num.length;i++)
{
    if(num[i]==x)
    {
        found = true;
        break;
    }
}
if (found=true)
{
    console.log(x,'the number is present');
}
else
{
    console.log(x,'the number is not present');
}