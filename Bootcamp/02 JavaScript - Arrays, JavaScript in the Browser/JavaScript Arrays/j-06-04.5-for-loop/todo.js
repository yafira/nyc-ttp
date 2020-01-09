const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)

// Counting in order = forEach
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// Challenge area

// No array or count in different order = for loop
// for (let count = 0; count = todos.length; count++) {
//     const num = count * 1
//     const todo = todos[count]
//     console.log('${num}. ${todo}' )
// }