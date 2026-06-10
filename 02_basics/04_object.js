 const googleUser ={}
 googleUser.id ="123abc"
 googleUser. name="sammy"
 googleUser.isloggedin= false
console.log(googleUser) 
const regularUser={
     email:"someuser@gamil.com",
    fullname:{
         userfullname:{
             firstnam:"bhawana",
             lastname:"bisht"
         }
      }
}
console.log(regularUser.fullname.userfullname);
//object merge
  const obj1={1:"a", 2:"b"}
   const obj2={3:"g", 4:"h"}
    //const obj3= { obj1 , obj2 }
   // const obj3=Object.assign(obj1,obj2)
  //  console.log(obj3)
    const obj3={...obj1,...obj2}
     console.log(obj3)
      const user=[
        {
            id:1,
            email:"ha@gmail.com"
        }, {
            id:1,
            email:"ha@gmail.com"
        }, {
            id:1,
            email:"ha@gmail.com"
        }
      ] 
     console.log(googleUser)
     console.log(Object.keys(googleUser))
     console.log(Object.values(googleUser))
  console.log(Object.entries(googleUser))
  console.log(googleUser.hasOwnProperty('isloggedin'))
  console.log(googleUser.hasOwnProperty('name'))
   console.log(googleUser.hasOwnProperty('voterid'))
  
  

  
