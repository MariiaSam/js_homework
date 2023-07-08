// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає все, що завгодно.
// Робить все, що завгодно.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Change code below this line
  
  const totalPlayTime = playtimes.reduce((previousValue, number) =>
   previousValue + number, 0);
  
  // Change code above this line
  const averagePlayTime = totalPlayTime / playtimes.length;