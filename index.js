// TASK A //

// function value(a){
//     a= "" + a;
//     let reverse = ""; 
//     for (let i = a.length - 1; i >= 0; i--) {
        
//         reverse += a[i];
//     }
//     return reverse;
// }

// console.log(value(123987))


// TASK B // 

// function value(a,b){
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
       
//        if (b == a[i]) {
//            count++ 
//         } 

//     }
//     return count;
// }

// console.log(value([1,2,3,4,5,3,6],3));



// TASK C //


function value(a) {
    // a = "" + a
    let tek = 0;
    for (let i = 0; i < a.length; i++) {
       
        if (a[i] % 2 !== 0) {
             tek = a[i];
        } 
    }
    return tek;
}


console.log(value([6, 66, 67, 89, 88, 66, 88]));