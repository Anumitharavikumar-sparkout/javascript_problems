let num = [1, 8, 6, 5, 2, 5, 8];
let dupli = [];
let = Duplicates = () =>
{
    for (let i=0;i<num.length;i++)
    {
        let isDuplicate = false;
        for (let j=0; j<dupli.length; j++) 
        {
            if (num[i] == dupli[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) 
            dupli.push(num[i]);
        
    }
}
Duplicates();
console.log(dupli);
