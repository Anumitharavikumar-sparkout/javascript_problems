let a = [4,5];
let b = [6,7];
for( let i=0;i<b.length;i++) a.push(b[i]);
for (let i = 0; i < a.length; i++)
{
 for (let j = 0; j < a.length-1; j++)
     {
      if (a[j] > a[i])
         {
             tp = a[j];
            a[j] = a[i];
            a[i] = tp;
        }
    }
}
let n = a.length;
if(n%2==0)  console.log((a[n/2] + a[n/2-1])/2)
else  console.log((a[n/2])/2)