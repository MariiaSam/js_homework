/*Оператор || приводить всі операнди до буля і повертає значення одного з них. Лівий операнд, якщо його можна привести до true, і правий - в інших випадках.

вираз || вираз
У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true
Тут результатом теж буде true, оскільки хоча б один з операндів, у цьому випадку правий, був приведений до true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true
А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false
Тобто логічне «АБО» запинається на істині і повертає те, на чому запнулося або останній операнд.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

До завдання*/

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  
    return canAccessContent;
  }


    console.log(checkIfCanAccessContent("pro"));
    console.log(checkIfCanAccessContent("starter"));
    console.log(checkIfCanAccessContent("vip"));
    console.log(checkIfCanAccessContent("free"));