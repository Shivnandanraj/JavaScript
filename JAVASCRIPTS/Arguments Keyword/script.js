// function add(a,b)
//  {
//     return a + b;
//  }


//EXAMPLE:1

function add() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++ ) {
        //console.log(arguments[i]);
        sum = sum + arguments[i]
    }
    return sum;
}

//EXAMPLE:2

const add3 = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}



