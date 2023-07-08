// Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
// Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR = 'Robert Sheckley';
  // Change code below this line
  
  const bookWithTitle = books.find((book) => book.title ===  BOOK_TITLE);
  const bookByAuthor = books.find((book) => book.author ===  AUTHOR);

