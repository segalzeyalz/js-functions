let arrayFuncs =  (() =>{ return {
    findSumOnSortedArr: (arr, sum)=>{
        //2 pointer in array
        let i = 0;
        let j=arr.length-1;
        while(i<j){
            if(arr[i]+ arr[j]===sum){
                return true;
            }else if(arr[i]+arr[j]>sum){
                --j;
            }else{
                ++i
            }
        }
        return false;
    },
    findSum: (arr, sum)=>{
        //because array is not sorted use object as hash table
        let obj = {};
        //add the rest of sum and every num
        for(let i=0; i<arr.length; i++){
            let numToCheck = arr[i]
            //Check if the numbert exist in object
            if(obj[numToCheck]){
                return true;
            }
            //if not - the rest of the number will be inserted in order to find it later
            let rest = sum-numToCheck;
            obj[rest] = true;
            
        }
        return false
    }
}})()

let $Arr = arrayFuncs;

console.log($Arr.findSum([0,5],5))