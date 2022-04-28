const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];


explorers.forEach((explorer)=>{
    console.log("2.1 - Explorer name: "+explorer.name)
})
console.log()
explorers.forEach((explorer)=>{
    console.log("2.2 - Explorer stack: "+explorer.stack)
})
console.log()
console.log('2.3 - list of stacks')
let staks = explorers.map(explorer => explorer.stack)
console.log(staks)

console.log()
console.log('2.4 - list of explorers with stack js.')
let js_explorers = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(js_explorers)

console.log()
console.log('2.5 - explorers with city CDMX.')
let cdmx_explorer = explorers.find(explorer => explorer.city == "CDMX")
console.log(cdmx_explorer)

console.log()
console.log('2.6 - sum exercise_completed.')
let sum_exercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log(sum_exercises)

console.log()
console.log('2.7 - explorers with property exercisesFinished')
let explorer_exercisesFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished == true)
console.log(explorer_exercisesFinished)

console.log()
console.log('2.8 - explorers with property isFinished.')
let explorer_isFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished == true)
console.log(explorer_isFinished)


