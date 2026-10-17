const useremail="bhawana2123"
 if(useremail){
     console.log("got a an email of user")
 }
 else{
    console.log("don't have user email")
 }
//flasy value
// false,0,-0,null,0n(BigInt),"",undefiend,nan
//truthy values-"0",'false', " ",[],{}, function(){}
//array is empty
if(useremail ===0){
     console.log("Array is empty");}
// object is empty or not
const emptyobj={}     
if(Object.keys(emptyobj)){
    console.log("object is empty")
}
//nullish coalescing operator(??):null undefined;
let val1;
//val1 = 5?? 10;
//val1 = 5?? 10
//val1 = null ?? 10;
//val1= undefined ?? 20;
val1= undefined ?? 20 ?? 10;

console.log(val1);
//teranary opaertoror-sapce reduce
const penprice=100
penprice<90 ? console.log("penprice can be purchased"):console.log("penprice can,not  be purchased")
