let num = [4, 2, 65, 21, 5, 1, 7];
let tp=0;
for (let i = 0; i < num.length; i++)

     {
      if (num[i] > num[i+1])
         {
             tp = num[i];
            num[i] = num[i+1];
            num[i+1] = tp;
        }
    }

console.log('ascending order',num);
console.log('descending order',num.reverse());
