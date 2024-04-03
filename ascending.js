let num = [4, 2, 65, 21, 5, 1, 7];
let tp=0;
for (let i = 0; i < num.length; i++)
{
 for (let j = 0; j < num.length-1; j++)
     {
      if (num[j] > num[i])
         {
             tp = num[j];
            num[j] = num[i];
            num[i] = tp;
        }
    }
}
console.log('ascending order',num);
console.log('descending order',num.reverse());
