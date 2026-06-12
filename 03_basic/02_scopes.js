 let a=300

 if(true){
    let a=10
    const b=20
    console.log("INNER:", a)}
  console.log(a);
 // console.log(b )
//console.log(c);

//global and local scope
 //function one(){
   // username="bhawana"
    //function two(){
     //  const website="youtube"
       // console.log(username);  }
 //console.log(website);
  //two()}
 // one()
  
 if(true){
     const username ="bhawana"
    if ( username === "bhawana"){
       const website ="youtube"
       console.log(username+ website)
       }
 //console.log(website);  
  }
 // console.log(username)
 // technique of function 
 // fisrt
  console.log(addone(5))
  function addone(num){
        return num+1
  }

// second
 const addTwo=function (num){
        return num+2
  }
 console.log(addTwo(5))
  
  