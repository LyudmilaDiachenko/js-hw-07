// # Завдання 3
// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає
// рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.
// Використайте деструктуризацію, щоб отримати доступ до імені та віку з 
// переданого об'єкту.

function userAge({name, age}){
    return `${name} - ${age} років`
}
console.log(userAge({name: "Ivan", age: 32}));