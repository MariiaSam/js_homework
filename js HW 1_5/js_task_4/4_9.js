// У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

// const add = (a, b, c) => a + b + c;
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;

// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => 
   quantity * pricePerItem;
// Change code above this line
