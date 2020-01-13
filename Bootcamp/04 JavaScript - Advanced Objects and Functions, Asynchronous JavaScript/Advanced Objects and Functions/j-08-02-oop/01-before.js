const person = {
    firstName: 'Clancey',
    lastName: 'Turner',
    age: 54,
    getBio() {
        return '${this.firstName} is ${this.age}'
    }
}

const bio = person.getBio()

console.log(bio)