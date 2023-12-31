/*Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
name - ім'я для перевірки входження в повне ім'я.
Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

Оголошена функція checkForName(fullname, name).
Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false*/


function checkForName(fullName, name) {
    const result = fullName.includes(name); 
     return result;
   }
      console.log(checkForName("Egor Kolbasov", "Egor"));
      console.log(checkForName("Egor Kolbasov", "egor"));
      console.log(checkForName("Egor Kolbasov", "eg0r"));
      console.log(checkForName("Egor Kolbasov", "Zhenya"));
      console.log(checkForName("Egor Kolbasov", "Vadim"));
      console.log(checkForName("Egor Kolbasov", "vadim"));
      console.log(checkForName("Egor Kolbasov", "Dima"));

/*Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, повертає буль - true, якщо входить, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("droid")); // true
console.log(productName.includes("Droid")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false*/