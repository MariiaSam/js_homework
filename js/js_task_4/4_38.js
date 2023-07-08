// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// students.sort();
// console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// Водночас порядковий номер великих літер менший, ніж у малих.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const alphabeticalAuthors =
[...authors].sort((a, b) => a.localeCompare(b));

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);
console.log(releaseDates);

