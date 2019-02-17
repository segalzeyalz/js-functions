let findSumOnSortedArr = (arr, sum)=>{
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
}

let findSum = (arr, sum)=>{
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
console.log(findSum([0,10,3,2,80,11],0))
console.log(findSum([0,10,3,2,80,11],10))
console.log(findSum([0,10,3,2,80,11],5))
console.log(findSum([0,10,3,2,80,11],14))
console.log(findSum([0,10,3,2,80,11],91))
console.log(findSum([0,10,3,2,80,11],13))
console.log(findSum([0,10,3,2,80,11],82))
console.log(findSum([0,10,3,2,80,11],1))
console.log(findSum([0,10,3,2,80,11],2))
console.log(findSum([0,10,3,2,80,11],4))
console.log(findSum([0,10,3,2,80,11],19))