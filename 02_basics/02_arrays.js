const marval_heros=['thor',"ironman","spideramn"]
const dc_heros=["superman","flash","batman"]
//marval_heros.push(dc_heros);
//console.log(marval_heros)
//console.log(marval_heros[3][1])
 const allheros =marval_heros.concat(dc_heros)
console.log(allheros);
// spread operator=> allows an iterable, such as an array,
//  string, or object, to be expanded into individual elements or properties.
console.log(allheros);
 const allmyheros =[...marval_heros,...dc_heros]
console.log(allmyheros);
const arrn=[1,2,3,[4,5], 6,7,[7,9,[3,4]]]
console.log(arrn.flat(Infinity))
console.log(Array.isArray('bhawana'))
console.log(Array.from('bhawana'))
console.log(Array.from({ name:"bhawana"}))// intersting case 
let score1=300
let score2=400
let score3=500
console.log(Array.of(score1,score2,score3));


