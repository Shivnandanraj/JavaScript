//High order functions and callback

// function add(a, b, cb) {  //cb  means = callback
//     let result = a +b;
//     cb(result);
// }

// function showResult(result) {
//     console.log(result);
// }

//add(2, 4, showResult);

//short form 

//add(2, 4, (val) => console.log(val));

function add(a, b, cb) {  //cb  means = callback
    let result = a +b;
    cb(result);

    return () => console.log(result);
}

let resultFunction = add(2, 4, () => {});
resultFunction();