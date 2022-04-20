console.log("2) Creacion de un objeto con propiedades");

const explorer = {
  name: "Urivan",
  edad: 25,
  mission: "Node JS",
  stack: ["js", "node", "react", "vue"],
  blog: {
    url: "https://github.com/Urivan07",
    posts: "5"
  }, // esto es un objeto
};

console.log(explorer);
console.log("Accediendo a las propiedades del objeto")
console.log(explorer.name)
console.log(explorer['name'])

// -------------------------------
console.log("Ejemplo 3: Objeto con metodos!")
const ajolonauta = {
    name : "Woopa",
    mission: "Node JS",
    sayHelloToExplorers : function(){
        console.log("Soy el ajolonauta, que onda!")
    },
    tellMeMore: function() {
        return `Ajolonauta: ${this.name}`
    }
}

console.log("Ajolonauta:")
console.log(ajolonauta)
ajolonauta.sayHelloToExplorers()
console.log(ajolonauta.tellMeMore())