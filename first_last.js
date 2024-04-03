let num = [5,9,6,3,8];
function firstlastelement(num)
{
    if(num.length>0)
    {
      const firstElement = num[0];
      const lastElement = num[num.length-1];
      return [firstElement,lastElement];
    }
    


}
const [firstElement, lastElement] = firstlastelement(num);
console.log('firstelement',firstElement);
console.log('lastelement',lastElement);


