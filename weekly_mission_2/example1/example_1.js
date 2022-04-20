console.log("Ejemplo 1 Creacion de un objeto vacio");
const myFirstObject = {}; // empty object
console.log("1. Objeto vacio: ");
console.log(myFirstObject);

console.log("Ejemplo 2 Creacion de un objeto con propiedades");
const explorer = {
  name: "Urivan",
  edad: 25,
  mission: "Node JS",
  stack: ["js", "node", "react", "vue"],
  blog: {
    url: "https://github.com/Urivan07",
    posts: "5",
  }, // esto es un objeto
};

console.log(explorer);
console.log("Accediendo a las propiedades del objeto");
console.log(explorer.name);
console.log(explorer["name"]);

// -------------------------------
console.log("Ejemplo 3: Objeto con diferentes propiedades!");
const ajolonauta = {
  name: "Woopa",
  mission: "Node JS",
  sayHelloToExplorers: function () {
    console.log("Soy el ajolonauta, que onda!");
  },
  tellMeMore: function () {
    return `Ajolonauta: ${this.name}`;
  },
};

console.log("Ajolonauta:");
console.log(ajolonauta);
ajolonauta.sayHelloToExplorers();
console.log(ajolonauta.tellMeMore());

console.log("Ejemplo 4: Objeto con métodos");
const pet = {
  name: "Terry",
  // Esta es una función que se guarda como propiedad
  sayHello: function () {
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`);
  },
};

pet.sayHello();

console.log("Ejemplo 5: Objeto con método que recibe parámetros");
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function (yourPet) {
    console.log(`${this.name} say's hello to ${yourPet}`);
  },
};

myPet.sayHelloToMyPet("Terry");
