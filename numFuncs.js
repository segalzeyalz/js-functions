const numFuncs =  (() =>{ return {
    isInteger: (a) =>{
        return a%1===0;
    },
    biggestDivider: (a,b)=>{
        if(b===0){
            return a;
        }
        if(a>b){
            return numFuncs.biggestDivider(b, a%b)
        }else{
            return numFuncs.biggestDivider(a, b%a)
        }
    },
    drfhg: (a) =>a
}
})()

let $Num = numFuncs;