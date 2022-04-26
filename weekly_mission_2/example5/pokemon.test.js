import Pokemon from "./pokemon";

test("1) Create a new object pokemon", () => {
  const myPokemon = new Pokemon("Pikachu");
  console.log(myPokemon.name)
  expect(myPokemon.name).toBe("Pikachu"); // Corrige esta prueba
});

// TDD Test driven development
// 1 Escribir una prueba que quieres modelar
// 2 Correr la prueba y verla fallar
// 3 Escribir eñ cpdigo que haga pasar a esta prueba