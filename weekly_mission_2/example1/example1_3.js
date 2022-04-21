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
