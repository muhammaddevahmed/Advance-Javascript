let displayResult = (a,b) => {
    return [  a + b,
     a - b,
     a * b,
     a / b,
     a % b]
   
}
let result = displayResult(6,10);
console.log(result);


let calculation = (a,b) =>{
    let c = a + b;
    let d = a - b;
    let e = a * b;
    let f = a / b;
    let g = a % b ;
    return[c,d,e,f,g];
}

let ans = calculation(25,10);
console.log(ans);
console.log("sum of a and b is :" + ans[0]);
console.log("Difference of a and b is :" + ans[1]);
console.log("Product of a and b is :" + ans[2]);
console.log("Division of a and b is :" + ans[3]);
console.log("Reminder of a and b is :" + ans[4]);
