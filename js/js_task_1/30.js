/*
Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

Оголошена функція getNameLength(name)
Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"
*/
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

console.log(getNameLength('Poly'));
console.log(getNameLength('Harambe'));
console.log(getNameLength('Billy'));
console.log(getNameLength('Joe'));

/*Для того щоб дізнатися довжину рядка, тобто кількість її символів,
 у рядків є вбудована властивість length, значення якої можна отримати, 
 звернувшись до неї через крапку після імені змінної або рядкового літерала.

Ця властивість повертає кількість одиниць коду в рядку. 
JavaScript використовує кодування UTF-16 ,
 де кожен символ Unicode може бути закодований як одна або дві
  одиниці коду, тому значення, яке повертає, може length
  не відповідати фактичній кількості символів Unicode у рядку. 
  Для звичайних шрифтів, таких як латиниця, кирилиця, відомі символи CJK тощо, 
  це не повинно бути проблемою, але якщо ви працюєте з певними сценаріями, такими як емодзі, математичні 
  символи або незрозумілі китайські символи, можливо, 
  вам доведеться враховувати різниця між одиницями коду та символами.
 */