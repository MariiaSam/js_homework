/*String.prototype.slice()
Метод slice()витягує частину рядка та повертає його як новий рядок,
не змінюючи оригінальний рядок.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex, і повертає новий рядок.
*/
/*Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

string - оригінальний рядок
length - кількість символів з початку рядка для підрядка
Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

Оголошена функція getSubstring(string, length)
Виклик функції getSubstring("Hello world", 3) повертає "Hel"
Виклик функції getSubstring("Hello world", 6) повертає "Hello"
Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
Виклик функції getSubstring("Hello world", 0) повертає ""*/

function getSubstring(string, length) {
    const substring = string.substring(0, length);
  
    return substring;
  }
  