var numbers=[10,7,3,2,9,5,1,8,4,6];
numbers.sort(function(a,b){
    return a-b
});
console.log(numbers);


// var email=prompt("Enter your email address");
// function valid(){
//     if(email.includes("@gmail.com")){
//         console.log(" valid email address");
//     }
//     else{
//         console.log("Not a valid email address");
//     }     
// }
// valid();


var a =prompt("Enter a numbers")
var sum=0,rem=0;
 while(a>0){
    rem=a%10;
    sum=sum+rem;
    a=(a-rem)/10;
 }
 console.log(sum);
