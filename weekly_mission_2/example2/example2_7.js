
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('en'))
console.log("Paises que terminan en en")
console.log(countriesEndsByia)