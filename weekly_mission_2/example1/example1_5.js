console.log("Ejemplo 5: Objeto con método que recibe parámetros");
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function (yourPet) {
    console.log(`${this.name} say's hello to ${yourPet}`);
  },
};

myPet.sayHelloToMyPet("Terry");