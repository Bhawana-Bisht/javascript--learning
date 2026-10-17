// singleton object
// object literal
const mysym = Symbol("key1")
const jsUser = {
    name: "bhawana",
    age: 18,
    location: "haldwani",
    isloggedin: false,
    email: "bhawna@23gmail.com",
   [mysym]: "mykey1"
}
// Object access
console.log(jsUser.name)
console.log(jsUser.email)
console.log(jsUser["name"])
console.log(jsUser["email"])
// Symbol access
console.log(jsUser[mysym])
 //Object.freeze(jsUser)
 console.log(jsUser)
 jsUser.greeting = function(){
     console.log('Hello JS user')
        }
 jsUser.greetingTwo = function(){
     console.log('Hello JS user,${this.name}')}   
 
  console.log(jsUser.greeting())
   console.log(jsUser.greetingTwo())