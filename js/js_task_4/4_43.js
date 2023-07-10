// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
// const sortByDescendingFriendCount = users => {
//     return users.sort ((a, b) => b.friends.length - a.friends.length);}
//     const newriends = sortByDescendingFriendCount(users);
//     // Change code above this line

const sortByDescendingFriendCount = users =>
  users.slice().sort((a, b) => b.friends.length - a.friends.length);