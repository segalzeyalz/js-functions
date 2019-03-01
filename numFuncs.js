let numFuncs =  (() =>{ return {
    isInteger: (a) =>{
        return a%1===0;
    },
    biggestDivider: (a,b)=>{
        let temp
        if(a>b){
            if(a%b===0){
                return b;
            }
        } else{
            if(b%a===0){
                return a;
            }
        }
    }
}
})()

let $Num = numFuncs;
