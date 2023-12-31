// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter((user) => user.age >= minAge &&  user.age <= maxAge);
   };
 
   // Change code above this line
// Change code above this line

// Для перебирання параметра `users` використаний метод `filter()`
// Якщо значення параметрів `minAge` і `maxAge` дорівнюють `20` і `30` відповідно, функція повертає масив об'єктів користувачів з іменами `Ross Vazquez`, `Elma Head` і `Carey Barr`
// Якщо значення параметрів `minAge` і `maxAge` дорівнюють `30` і `40` відповідно, функція повертає масив об'єктів користувачів з іменами `Moore Hensley`, `Sharlene Bush`, `Blackburn Dotson` і `Sheree Anthony`
// Якщо значення параметрів `minAge` і `maxAge` дорівнюють `80` і `100` відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значенняе
// Оголошена змінна `getUsersWithAge`
// Змінній `getUsersWithAge` присвоєна стрілочна функція з параметрами `(users, minAge, maxAge)`