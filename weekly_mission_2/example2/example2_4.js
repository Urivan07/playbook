console.log("Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista")
console.log("Imprimiendo la lista de elementos al cuadrado")
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)


const modifiedArray = numbers4.map((element,index) => element * element);
console.log(modifiedArray)

console.log(numbersSquare)