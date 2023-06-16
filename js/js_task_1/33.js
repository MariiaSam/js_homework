/*Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

Доповни код функції таким чином, що якщо довжина рядка:

не перевищує maxLength, функція повертає його в початковому вигляді.
більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.
Оголошена функція formatMessage(message, maxLength)
Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"*/

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.substring(0, maxLength) + '...';
  }
  return result;
}


/*String.substring() - повертає новий рядок із вказаної позиції до вказаної позиції.

Синтаксис:
str.substring(indexA[, indexB])
Параметри:
indexA - позиція, з якої починати копіювати символи. Ціле число від 0 до string.length-1 (кінця рядка).

indexB - необов'язковий параметр. Позиція до якої копіювати рядок. Ціле число від 0 до string.length-1 (кінця рядка).

Опис:
substring() метод об'єкту String який копіює символи з рядка, з вказаної позиції indexA до вказаної позиції не включаючи indexB. Різниця між substr і substring: substr копіює з позиції до вкзаної кількості символів, а substring до вказаної позиції.

Якщо аргумент indexA дорівнює аргументу indexB, метод substring () поверне порожній рядок.
Якщо аргумент indexB опущений, метод substring () витягне символи до кінця рядка.
Якщо будь-який з аргументів менше, або дорівнює нулю або дорівнює NaN, він буде трактуватися як рівний 0.
Якщо будь-який з аргументів більше, ніж stringName.length, він буде трактуватися як рівний stringName.length.
Якщо аргумент indexA буде більше аргументу indexB, то метод substring() спрацює так, як якби аргументи були поміняні місцями; наприклад, str.substring (1, 0) == str.substring (0, 1).
Приклад:

var s="JavaScript";

x=s.substring(0,4);
alert(x); //"Java"


var s="JavaScript";

x=s.substring(3,6);
alert(x); //"aSc"
*/
