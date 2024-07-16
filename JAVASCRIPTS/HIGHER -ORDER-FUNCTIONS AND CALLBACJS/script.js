//Higher order function
function a(b){
    console.log(b);
    b()
}

//function sayHi() {
    //console.log('hiiiiiii');

//}
//a(sayHi);

 //callback functuions
 a(function() {
    console.log('hiiiiiiii');
 })

