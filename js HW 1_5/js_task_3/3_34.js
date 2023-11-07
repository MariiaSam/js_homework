// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["Останнє королівство", "Страж снів"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними. Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName), але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// // ❌ Слабкопозв'язані, незалежні сутності
// const books = [];
// function getBooks() {}
// function addBook() {}

const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`;
  
    }
    
    // Change code above this line
  };
  
