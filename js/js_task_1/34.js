/*Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

Оголошена функція normalizeInput(input)
Виклик функції normalizeInput("Hello world") повертає "hello world"
Виклик функції normalizeInput("This ISN'T SpaM") повертає "this isn't spam"
Виклик функції normalizeInput("Big SALE") повертає "big sale"*/

function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); 
    return normalizedInput;
  }
  // console.log(str.toLowerCase()); приводить все до нижнього регістру

  /*toUpperCase - повертає рядок у верхньому регістру.

Синтаксис:
str.toUpperCase();
Опис:
toUpperCase метод об'єкту String який повертає значення рядка, перетвореного у верхній регістр. Метод toUppetCase не змінює значення самого рядка з якого визивали а лише повертає новий змінений рядок. Щоб у нижній регістр використовують toLowerCase.

Приклад:

var s="JavaScript";

x=s.toUpperCase();
alert(x); //"JAVASCRIPT"

var s = "Довідка";
alert( s.toUpperCase() );
 
*/