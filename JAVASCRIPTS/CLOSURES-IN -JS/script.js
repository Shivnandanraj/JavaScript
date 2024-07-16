//  function x() {
//     const a = 10
//     function child() {
//         console.log(a)
//     }
//     return child
//  }

//  const y = x()

//  console.dir(y);


function gp() {
    const a = 2;
    function x() {
        const b = 5;
        function child() {
            console.log(a,b);
        }
        return child;
    }
    const y = x(1);
    const y2 = x(2);

    console.dir(y);
    console.dir(y2);
}

gp()