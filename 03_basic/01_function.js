//function in js 
// function functionname(){
//  scope of function}
// number1,number2= prameter and 3,4 are argument
 //function addTwoNumbers(number1,number2){
    
  //  console.log(number1+number2) }
  //addTwoNumbers(3,4)
  function addTwoNumbers(number1,number2){
   // let result =number1+number2 
    // return result
     console.log("Hi!coder welcome to the world of coding")
     return number1+number2
}
const result =addTwoNumbers(3,4)
 console.log("Result:", result);
  function loginUserMessage(username){
    if (username===undefined){
         console.log("please enter a username")
    }
     return `${username} just logged in`
  } //solving mutiple cart issue 
  console.log(loginUserMessage())
   function calculateCartPrice(...num1){
   // function calculateCartPrice(val1, val2,...num1){
       return num1
   }
   //  how object are used in function
    console.log(calculateCartPrice(4000,67788,90000,8000))
     const user ={
            name:"jay",
             price:199,
              coursename: "javascript beginners"
     }
      function handleObject(anyobject){
         console.log(`username is ${anyobject.name} and  price is ${anyobject.price}`)
      }
       handleObject(user)
        const newArray =[200,400,500,4699]
         function  returnArray( getArray){
                 return getArray[3]
         }
          console.log(returnArray(newArray))