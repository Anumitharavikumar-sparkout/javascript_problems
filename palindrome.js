let num = [1,2,3,2,1];
let startval = 0;
let endval = num.length-1;

let palandrome = () =>
{
    while(startval<endval)
    {
        if(startval !== endval)
        {
        console.log('it is not palandrome');
        }
        startval++;
        endval--;
    }
return true;
}
console.log('it is palandome',palandrome());
