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
